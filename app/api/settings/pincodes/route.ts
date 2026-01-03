import { NextResponse } from "next/server";
import { connectMongo } from "@/lib/mongoose";
import PincodeMaster from "@/models/PincodeMaster";
import { verifyAccessToken } from "@/lib/jwt";

export const runtime = "nodejs";

async function getAuthToken(req: Request) {
  const cookieHeader = req.headers.get("cookie") || "";
  const cookies = Object.fromEntries(
    cookieHeader.split(";").map(c => c.trim().split("="))
  );

  const token =
    req.headers.get("authorization")?.replace("Bearer ", "") ||
    cookies.accessToken ||
    cookies.access_token ||
    cookies.jwt;

  if (!token) throw new Error("Unauthorized");

  return verifyAccessToken(token); // ✅ real verification
}

export async function GET(req: Request) {
  try {
    await connectMongo();
    await getAuthToken(req);

    const { searchParams } = new URL(req.url);

    const page = Math.max(Number(searchParams.get("page")) || 1, 1);
    const limit = Math.min(Number(searchParams.get("limit")) || 20, 100);
    const search = searchParams.get("search")?.trim();

    const filter: any = {};

    if (search) {
      filter.$or = [
        { pincode: new RegExp(search, "i") },
        { officename: new RegExp(search, "i") },
        { circlename: new RegExp(search, "i") },
        { regionname: new RegExp(search, "i") },
      ];
    }

    const [rows, total] = await Promise.all([
      PincodeMaster.find(filter)
        .populate("country", "name code")
        .populate("state", "name code")
        .populate("district", "name code")
        .sort({ pincode: 1 })
        .skip((page - 1) * limit)
        .limit(limit)
        .lean(),

      PincodeMaster.countDocuments(filter),
    ]);

    return NextResponse.json({
      status: true,
      data: rows,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (err) {
    console.error("PINCODE LIST ERROR", err);
    return NextResponse.json(
      { status: false, message: "Server error" },
      { status: 500 }
    );
  }
}
