// /api/admin/parents/:id/kyc/aadhaar-validation/route.ts

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
    const parentId = params.id;

    /* 2️⃣ body se aadhaar nikalo */
    const body = await req.json();
    const { aadhaar } = body;

    if (!aadhaar) {
      return NextResponse.json(
        { message: "Aadhaar number is required" },
        { status: 400 }
      );
    }

    /* 3️⃣ parent exist check */
    const parent = await ParentMaster.findById(parentId);
    if (!parent) {
      return NextResponse.json(
        { message: "Parent not found" },
        { status: 404 }
      );
    }

    /* 4️⃣ QuickeKYC API call */
   const response = await quickeKyc.post(
  "/api/v1/aadhaar/aadhaar-validation",
  {
    key: process.env.QUICKEKYC_API_KEY,
    id_number: aadhaar
  }
);
// ✅ NO TS ERROR
const maskedMobile =
  (response as any)?.data?.data?.masked_mobile_number;


    /* 5️⃣ DB me full response store */
    await ParentKycRequest.create({
      parentId,
      provider: "quickekyc",
      level: "aadhaar_validation",
      status: "verified",
      aadhaarMasked: maskedMobile,
      responseRaw: response.data
    });

    /* 6️⃣ success response */
    return NextResponse.json(
      {
        message: "Aadhaar validated successfully",
        data: response.data
      },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("AADHAAR VALIDATION ERROR:", err);

    return NextResponse.json(
      {
        message: "Aadhaar validation failed",
        error: err?.response?.data || err.message
      },
      { status: 500 }
    );
  }
}
