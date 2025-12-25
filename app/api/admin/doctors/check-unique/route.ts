// import { connectMongo } from "@/lib/mongoose";
// import DoctorMaster from "@/models/DoctorMaster";
// import { success } from "@/lib/response";

// export async function POST(req: Request) {
//   await connectMongo();
//   const { type, value } = await req.json();

//   const exists = await DoctorMaster.exists({ [type]: value });
//   return success("Checked", { exists: !!exists });
// }
// // 

import { connectMongo } from "@/lib/mongoose";
import DoctorMaster from "@/models/DoctorMaster";
import { success, error } from "@/lib/response";

export const runtime = "nodejs";

// POST { type: "email" | "phone" | "aadhaar", value: "..." }
export async function POST(req: Request) {
  try {
    await connectMongo();
    const { type, value } = await req.json();

    if (!type || !value) {
      return error("Invalid request", {}, 400);
    }

    let query: any = {};

    if (type === "email") {
      query.email = value.toLowerCase();
    } else if (type === "phone") {
      query.phone = value;
    } else if (type === "aadhaar") {
      query.aadhaar = value;
    } else {
      return error("Invalid check type", {}, 400);
    }

    const exists = await DoctorMaster.findOne(query).select("_id").lean();

    if (exists) {
      return success("Already exists", { exists: true });
    }

    return success("Available", { exists: false });
  } catch (err: any) {
    console.error("check-unique error:", err);
    return error("Server error", { server: err.message }, 500);
  }
}