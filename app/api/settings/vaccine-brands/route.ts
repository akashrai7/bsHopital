import { connectMongo } from "@/lib/mongoose";
import VaccineBrandMaster from "@/models/VaccineBrandMaster";
import { success, error } from "@/lib/response";

export async function POST(req: Request) {
  try {
    await connectMongo();
    const body = await req.json();

    const doc = await VaccineBrandMaster.create({
      vaccine_id: body.vaccine_id,
      brand_name: body.brand_name?.trim(),
      manufacturer_id: body.manufacturer_id,
      antigen_composition: body.antigen_composition || "",
      dosage_form_id: body.dosage_form_id,
      vial_type: body.vial_type?.trim(),
      storage_condition_id: body.storage_condition_id,
      is_active: body.is_active !== false,
    });

    return success(doc, "Vaccine brand added");
  } catch (err: any) {
    if (err.code === 11000) {
      return error("Brand code must be unique");
    }
    return error(err.message || "Failed to add brand");
  }
}

export async function GET() {
  try {
    await connectMongo();
    const list = await VaccineBrandMaster.find()
      .populate("vaccine_id", "name")
      .populate("manufacturer_id", "name")
      .populate("dosage_form_id", "name")
      .populate("storage_condition_id", "name")
      .sort({ createdAt: -1 });

    return success("Vaccine Brand", list);
  } catch {
    return error("Failed to fetch vaccine brands");
  }
}
