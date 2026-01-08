// /api/admin/parents/:id/kyc/verify-otp/route.ts

import { NextResponse } from "next/server";
import { connectMongo } from "@/lib/mongoose";
import ParentMaster from "@/models/ParentMaster";
import ParentKycRequest from "@/models/ParentKycRequest";
import { quickeKyc } from "@/lib/quickekyc";

/* ================= POST ================= */

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectMongo();

    /* 1️⃣ parentId from URL */
     const { id: parentId } = await params;

    /* 2️⃣ request body */
    const body = await req.json();
    const { requestId, otp } = body;

    if (!requestId || !otp) {
      return NextResponse.json(
        { message: "requestId and otp are required" },
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

    /* 4️⃣ QuickeKYC submit OTP */
    const response = await quickeKyc.post(
      "/api/v1/aadhaar-v2/submit-otp",
      {
        key: process.env.QUICKEKYC_API_KEY,
        request_id: requestId,
        otp
      }
    );

    const apiData = (response as any)?.data;

    /* 5️⃣ Find KYC request record */
    const kycRequest = await ParentKycRequest.findOne({
      parentId,
      requestId
    });

    if (!kycRequest) {
      return NextResponse.json(
        { message: "KYC request not found" },
        { status: 404 }
      );
    }

    /* 6️⃣ SUCCESS CASE */
    if (apiData?.status === "success") {
      await ParentKycRequest.findByIdAndUpdate(kycRequest._id, {
  status: "verified",
  data: apiData,
  responseRaw: apiData,
  errorMessage: null
});

      await ParentMaster.findByIdAndUpdate(parentId, {
        "kyc.status": "verified",
        "kyc.verifiedAt": new Date()
      });

      return NextResponse.json(
        {
          message: "Aadhaar KYC verified successfully",
          data: apiData
        },
        { status: 200 }
      );
    }

    /* 7️⃣ FAILURE CASE (OTP timeout / wrong OTP) */
    await ParentKycRequest.findByIdAndUpdate(kycRequest._id, {
      status: "failed",
      responseRaw: apiData,
      errorMessage: apiData?.message || "OTP verification failed"
    });

    
    if (parent.kyc?.status !== "verified") {
  await ParentMaster.findByIdAndUpdate(parentId, {
    "kyc.status": "failed"
  });
}

    return NextResponse.json(
      {
        message: apiData?.message || "OTP expired. Please request a new OTP.",
        data: apiData,
        code: "OTP_EXPIRED"
      },
      { status: 400 }
    );



  } catch (err: any) {
    console.error("VERIFY OTP ERROR:", err);

    return NextResponse.json(
      {
        message: "Failed to verify OTP",
        error: err?.response?.data || err.message
      },
      { status: 500 }
    );
  }
}
