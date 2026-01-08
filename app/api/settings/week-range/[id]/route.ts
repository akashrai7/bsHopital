// import { connectMongo } from "@/lib/mongoose";
// import WeekRangeMaster from "@/models/WeekRangeMaster";
// import { success, error } from "@/lib/response";
// import mongoose from "mongoose";

// type Params = { params: { id: string } };

// export async function PUT(req: Request, { params }: Params) {
//   try {
//     await connectMongo();
//     if (!mongoose.Types.ObjectId.isValid(params.id)) {
//       return error("Invalid ID");
//     }

//     const body = await req.json();
//     const start_week = Number(body.start_week);
//     const end_week = Number(body.end_week);

//     const update = {
//       title: body.title?.trim(),
//       start_week,
//       end_week,
//       start_day: start_week * 7,
//       end_day: end_week * 7,
//     };

//     const doc = await WeekRangeMaster.findByIdAndUpdate(
//       params.id,
//       update,
//       { new: true }
//     );

//     return success(doc, "Week range updated");
//   } catch (err: any) {
//     return error(err.message || "Update failed");
//   }
// }

// export async function DELETE(_: Request, { params }: Params) {
//   try {
//     await connectMongo();
    
//     const removed = await WeekRangeMaster.findByIdAndDelete(params.id);
//     if (!removed) return error("Not found.", { id: "Not found." }, 404);
//     return success("Deleted successfully.");
//   } catch {
//     return error("Delete failed");
//   }
// }

import { connectMongo } from "@/lib/mongoose";
import WeekRangeMaster from "@/models/WeekRangeMaster";
import { success, error } from "@/lib/response";
import mongoose from "mongoose";

type Params = {
  params: Promise<{ id: string }>;
};

export async function PUT(req: Request, { params }: Params) {
  try {
    await connectMongo();

    const { id } = await params; // ✅ IMPORTANT LINE

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return error("Invalid ID");
    }

    const body = await req.json();

    const start_week = Number(body.start_week);
    const end_week = Number(body.end_week);

    if (start_week > end_week) {
      return error("Start week cannot be greater than end week");
    }

    const update = {
      title: body.title?.trim(),
      start_week,
      end_week,
      start_day: start_week * 7,
      end_day: end_week * 7,
    };

    const doc = await WeekRangeMaster.findByIdAndUpdate(
      id,
      update,
      { new: true }
    );

    return success(doc, "Week range updated");
  } catch (err: any) {
    return error(err.message || "Update failed");
  }
}

export async function DELETE(_: Request, { params }: Params) {
  try {
    await connectMongo();

    const { id } = await params; // ✅ IMPORTANT LINE

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return error("Invalid ID");
    }

    await WeekRangeMaster.findByIdAndDelete(id);
     return success("Deleted successfully.");
  } catch {
    return error("Delete failed");
  }
}
