import { connectMongo } from "@/lib/mongoose";
import LanguageMaster from "@/models/LanguageMaster";
import { success, error } from "@/lib/response";

export const runtime = "nodejs";

// GET Languages
export async function GET() {
  try {
    await connectMongo();
    const items = await LanguageMaster.find({})
      .sort({ name: 1 })
      .lean();

    return success("Fetched languages.", items);
  } catch (err: any) {
    console.error("GET /languages error:", err);
    return error("Server error.", { server: err.message }, 500);
  }
}

// POST (Add language)
export async function POST(req: Request) {
  try {
    await connectMongo();
    const body = await req.json();

    const code = (body.code || "").trim().toUpperCase();
    const name = (body.name || "").trim();
    const is_active =
      typeof body.is_active === "boolean" ? body.is_active : true;

    const validationErrors: any = {};

    if (!code) validationErrors.code = "Code is required.";
    if (!name) validationErrors.name = "Name is required.";

    if (Object.keys(validationErrors).length > 0) {
      return error("Validation failed.", validationErrors, 422);
    }

    const duplicate = await LanguageMaster.findOne({ code });
    if (duplicate) {
      return error("Duplicate code.", { code: "This code already exists." }, 409);
    }

    const doc = await LanguageMaster.create({
      code,
      name,
      is_active,
    });

    return success("Language created.", doc);
  } catch (err: any) {
    console.error("POST /languages error:", err);
    return error("Server error.", { server: err.message }, 500);
  }
}