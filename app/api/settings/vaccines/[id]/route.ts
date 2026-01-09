// import { connectMongo } from "@/lib/mongoose";
// import VaccineMaster from "@/models/VaccineMaster";
// import { success, error } from "@/lib/response";
// import mongoose from "mongoose";

// type Params = {
//   params: Promise<{ id: string }>;
// };

// export async function PUT(req: Request, { params }: Params) {
//   try {
//     await connectMongo();
//     const { id } = await params;

//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return error("Invalid ID");
//     }

//     const body = await req.json();

//     const doc = await VaccineMaster.findByIdAndUpdate(
//       id,
//       {
//         week_range_id: body.week_range_id,
//         name: body.name?.trim(),
//         dose_type_id: body.dose_type_id,
//         vaccine_site_id: body.vaccine_site_id,
//       },
//       { new: true }
//     );

//     return success(doc, "Vaccine updated");
//   } catch (err: any) {
//     return error(err.message || "Update failed");
//   }
// }

// export async function DELETE(_: Request, { params }: Params) {
//   try {
//     await connectMongo();
//     const { id } = await params;

//     await VaccineMaster.findByIdAndDelete(id);
//     return success(null, "Deleted");
//   } catch {
//     return error("Delete failed");
//   }
// }


import { connectMongo } from "@/lib/mongoose";
import VaccineMaster from "@/models/VaccineMaster";
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

    const update = {
      week_range_id: body.week_range_id,
      name: body.name?.trim(),
      vaccine_code: body.vaccine_code?.trim(),
      dose_type_id: body.dose_type_id,
      vaccine_site_id: body.vaccine_site_id,
      is_mandatory: Boolean(body.is_mandatory),
      status: body.status === "inactive" ? "inactive" : "active",
    };

    const doc = await VaccineMaster.findByIdAndUpdate(id, update, { new: true });
    return success(doc, "Vaccine updated");
  } catch (err: any) {
    return error(err.message || "Update failed");
  }
}

export async function DELETE(_: Request, { params }: Params) {
  try {
    await connectMongo();
    const { id } = await params;

    await VaccineMaster.findByIdAndDelete(id);
    return success("Deleted", null);
  } catch {
    return error("Delete failed");
  }
}
