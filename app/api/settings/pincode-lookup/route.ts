// app/api/settings/pincode-lookup/route.ts

import { NextResponse } from "next/server";
import { connectMongo } from "@/lib/mongoose";
import PincodeMaster from "@/models/PincodeMaster";
import DistrictMaster from "@/models/DistrictMaster";

export const runtime = "nodejs";

export async function GET(req: Request) {
  try {
    await connectMongo();

    const { searchParams } = new URL(req.url);
    const pincode = searchParams.get("pincode");

    if (!pincode || !/^\d{6}$/.test(pincode)) {
      return NextResponse.json(
        { status: false, message: "Invalid pincode" },
        { status: 400 }
      );
    }

    const record = await PincodeMaster.findOne({ pincode })
      .populate("country", "name code")
      .populate("district", "name code state")
      .lean();

    if (!record) {
      return NextResponse.json({
        status: false,
        message: "Pincode not found",
      });
    }

    let state = record.state;

    // 🔁 fallback: derive state from district
    if (!state && record.district?.state) {
      state = record.district.state;
    }

    console.log("PINCODE LOOKUP FINAL:", pincode, {
      country: record.country,
      state,
      district: record.district,
    });


    return NextResponse.json({
      status: true,
      data: {
        pincode: record.pincode,
        circlename: record.circlename,
        country: record.country,
        state: state,              // ✅ FIX
        district: record.district,
      },
    });
  } catch (err) {
    console.error("pincode-lookup error", err);
    return NextResponse.json(
      { status: false, message: "Server error" },
      { status: 500 }
    );
  }
}
