import { NextResponse } from "next/server";
import { connectMongo } from "@/lib/mongoose";
import ParentKycRequest from "@/models/ParentKycRequest";

/* ================= GET ================= */

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectMongo();

     const { id: parentId } = await params;

  const history = await ParentKycRequest.find({ parentId })
    .sort({ createdAt: -1 })
    .lean();

    return NextResponse.json(
      {
        message: "KYC history fetched successfully",
        data: history
      },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("KYC HISTORY ERROR:", err);

    return NextResponse.json(
      {
        message: "Failed to fetch KYC history",
        error: err.message
      },
      { status: 500 }
    );
  }
}
