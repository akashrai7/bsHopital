import { connectMongo } from "@/lib/mongoose";
import VaccineBrandMaster from "@/models/VaccineBrandMaster";
import { success, error } from "@/lib/response";
import mongoose from "mongoose";

type Params = { params: Promise<{ id: string }> };

export async function PUT(req: Request, { params }: Params) {
  try {
    await connectMongo();
    const { id } = await params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return error("Invalid ID");
    }

    const body = await req.json();

    const doc = await VaccineBrandMaster.findByIdAndUpdate(
      id,
      {
        vaccine_id: body.vaccine_id,
        brand_name: body.brand_name?.trim(),
        manufacturer_id: body.manufacturer_id,
        antigen_composition: body.antigen_composition || "",
        dosage_form_id: body.dosage_form_id,
        vial_type: body.vial_type?.trim(),
        storage_condition_id: body.storage_condition_id,
        is_active: body.is_active !== false,
      },
      { new: true }
    );

    return success(doc, "Vaccine brand updated");
  } catch (err: any) {
    return error(err.message || "Update failed");
  }
}

export async function DELETE(_: Request, { params }: Params) {
  try {
    await connectMongo();
    const { id } = await params;
    await VaccineBrandMaster.findByIdAndDelete(id);
    return success("Deleted", null);
  } catch {
    return error("Delete failed");
  }
}
