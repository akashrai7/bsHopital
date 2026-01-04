// /api/admin/parents/:id/kyc/generate-otp/route.ts

import { NextResponse } from "next/server";
import { connectMongo } from "@/lib/mongoose";
import ParentMaster from "@/models/ParentMaster";
import ParentKycRequest from "@/models/ParentKycRequest";
import { quickeKyc } from "@/lib/quickekyc";
import { canAttemptKyc } from "@/lib/kycLimits";

/* ================= POST ================= */

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectMongo();

    /* 1️⃣ parentId from URL */
    const parentId = params.id;

    /* 2️⃣ request body */
    const body = await req.json();
    const { aadhaar } = body;

    if (!aadhaar) {
      return NextResponse.json(
        { message: "Aadhaar number is required" },
        { status: 400 }
      );
    }

    /* 3️⃣ parent exists? */
    const parent = await ParentMaster.findById(parentId);
    if (!parent) {
      return NextResponse.json(
        { message: "Parent not found" },
        { status: 404 }
      );
    }

    const limitCheck = canAttemptKyc(
  parent.kyc?.lastAttemptAt,
  parent.kyc?.totalAttempts
);

if (!limitCheck.allowed) {
  return NextResponse.json(
    {
      message: "Maximum OTP attempts reached for today. Try again tomorrow."
    },
    { status: 429 }
  );
}

    /* 4️⃣ already verified? */
    if (parent.kyc?.status === "verified") {
      return NextResponse.json(
        { message: "Parent already KYC verified" },
        { status: 400 }
      );
    }

    /* 5️⃣ QuickeKYC generate OTP */
    const response = await quickeKyc.post(
      "/api/v1/aadhaar-v2/generate-otp",
      {
        key: process.env.QUICKEKYC_API_KEY,
        id_number: aadhaar
      }
    );

    const requestId = (response as any)?.data?.request_id;

    if (!requestId) {
      return NextResponse.json(
        {
          message: "Failed to generate OTP",
          response: (response as any)?.data
        },
        { status: 400 }
      );
    }

    /* 6️⃣ Save KYC request */
    await ParentKycRequest.create({
      parentId,
      provider: "quickekyc",
      level: "otp",
      requestId,
      status: "otp_sent",
      responseRaw: (response as any)?.data
    });

    /* 7️⃣ Update parent master */
    await ParentMaster.findByIdAndUpdate(parentId, {
      "kyc.status": "otp_sent",
      "kyc.lastAttemptAt": new Date(),
      $inc: { "kyc.totalAttempts": 1 }
    });

    /* 8️⃣ success response */
    return NextResponse.json(
      {
        message: "OTP sent successfully",
        requestId
      },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("GENERATE OTP ERROR:", err);

    return NextResponse.json(
      {
        message: "Failed to generate OTP",
        error: err?.response?.data || err.message
      },
      { status: 500 }
    );
  }
}
