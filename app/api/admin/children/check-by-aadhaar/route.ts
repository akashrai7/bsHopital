// app/api/parents/check-by-aadhaar/route.ts
import { connectMongo } from "@/lib/mongoose";
import ParentMaster from "@/models/ParentMaster";
import { success, error } from "@/lib/response";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    await connectMongo();
    const body = await req.json();
    const aadhaar = (body.aadhaar || "").toString().trim();

    if (!/^\d{12}$/.test(aadhaar)) {
      return error("Invalid Aadhaar.", { aadhaar: "Aadhaar must be 12 digits" }, 422);
    }

    const p = await ParentMaster.findOne({ aadhaar }).select("first_name last_name phone email _id").lean();
    if (!p) return success("Not found.", { found: false });

    return success("Found parent.", { found: true, parent: p });
  } catch (err: any) {
    console.error("POST /api/parents/check-by-aadhaar error:", err);
    return error("Server error.", { server: err.message }, 500);
  }
}