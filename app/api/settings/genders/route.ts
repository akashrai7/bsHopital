// /app/api/settings/genders/route.ts
import { connectMongo } from "@/lib/mongoose";
import SettingGender from "@/models/SettingGender";
import { success, error } from "@/lib/response";

export const runtime = "nodejs";

export async function GET(req: Request) {
  try {
    await connectMongo();

    // optional: allow search query ?q=male
    const url = new URL(req.url);
    const q = (url.searchParams.get("q") || "").trim();

    const filter: any = {};
    if (q) {
      // case-insensitive partial match
      filter.name = { $regex: q, $options: "i" };
    }

    const docs = await SettingGender.find(filter).sort({ createdAt: -1 }).lean();
    return success("Fetched genders.", docs);
  } catch (err: any) {
    console.error("GET /api/settings/genders error:", err);
    return error("Server error.", { server: err.message }, 500);
  }
}

export async function POST(req: Request) {
  try {
    await connectMongo();
    const body = await req.json();
    const name = (body.name || "").toString().trim();

    // validation
    const validationErrors: Record<string, string> = {};
    if (!name) validationErrors.name = "Name is required.";
    if (Object.keys(validationErrors).length) {
      return error("Validation failed.", validationErrors, 422);
    }

    // uniqueness check
    const existing = await SettingGender.findOne({ name: { $regex: `^${name}$`, $options: "i" } });
    if (existing) {
      return error("Duplicate entry.", { name: "This gender already exists." }, 409);
    }

    const doc = await SettingGender.create({ name });
    return success("Gender created.", doc);
  } catch (err: any) {
    console.error("POST /api/settings/genders error:", err);
    // handle duplicate key race condition
    if (err?.code === 11000) {
      return error("Duplicate entry.", { name: "This gender already exists." }, 409);
    }
    return error("Server error.", { server: err.message }, 500);
  }
}
