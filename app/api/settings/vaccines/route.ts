import { connectMongo } from "@/lib/mongoose";
import VaccineMaster from "@/models/VaccineMaster";
import { success, error } from "@/lib/response";

export async function GET() {
  try {
    await connectMongo();
    const list = await VaccineMaster.find();
    return success("vaccine fetched", list);
  } catch (err) {
    return error("Failed to fetch vaccines");
  }
}


export async function POST(req: Request) {
  try {
    await connectMongo();
    const body = await req.json();

    const doc = await VaccineMaster.create({
      week_range_id: body.week_range_id,
      name: body.name?.trim(),
      dose_type_id: body.dose_type_id,
      vaccine_site_id: body.vaccine_site_id,
    });

    return success(doc, "Vaccine added");
  } catch (err: any) {
    return error(err.message || "Failed to add vaccine");
  }
}
