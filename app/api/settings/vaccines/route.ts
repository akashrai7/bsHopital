
import { connectMongo } from "@/lib/mongoose";
import VaccineMaster from "@/models/VaccineMaster";
import { success, error } from "@/lib/response";


import "@/models/WeekRangeMaster";
import "@/models/DoseTypeMaster";
import "@/models/VaccineSiteMaster";

export async function POST(req: Request) {
  try {
    await connectMongo();
    const body = await req.json();

    const payload = {
      week_range_id: body.week_range_id,
      name: body.name?.trim(),
      vaccine_code: body.vaccine_code?.trim(),
      dose_type_id: body.dose_type_id,
      vaccine_site_id: body.vaccine_site_id,
      pathogen_type: body.pathogen_type,          // ✅ add
      disease_description: body.disease_description, // ✅ add
      is_mandatory: Boolean(body.is_mandatory),
      status: body.status === "inactive" ? "inactive" : "active",
    };

    const doc = await VaccineMaster.create(payload);
    return success(doc, "Vaccine added");
  } catch (err: any) {
    return error(err.message || "Failed to add vaccine");
  }
}

export async function GET() {
  try {
    await connectMongo();
    const list = await VaccineMaster.find()
      .populate("week_range_id", "title")
      .populate("dose_type_id", "name")
      .populate("vaccine_site_id", "name")
      .sort({ createdAt: -1 });

    return success("Vaccine fetched", list);
  } catch {
    return error("Failed to fetch vaccines");
  }
}
