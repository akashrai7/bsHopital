import { connectMongo } from "@/lib/mongoose";
import ChildMaster from "@/models/ChildMaster";
import ParentMaster from "@/models/ParentMaster";
import { success, error } from "@/lib/response";
import { verifyAccessToken } from "@/lib/jwt";
import mongoose from "mongoose";

// function pad(n: number) {
//   return String(n).padStart(5, "0");
// }

// async function generateChildId() {
//   const last = await ChildMaster.findOne().sort({ createdAt: -1 }).lean();
//   if (!last?.child_id) return "CHD00001";
//   const num = Number(last.child_id.replace("CHD", "")) + 1;
//   return `CHD${pad(num)}`;
// }

export async function POST(req: Request) {
  try {
    await connectMongo();
   // await requireAuth(req);
    // const auth = req.headers.get("authorization") || "";
    // if (!auth.startsWith("Bearer ")) return error("Unauthorized", {}, 401);
    // const user = await verifyAccessToken(auth.split(" ")[1]);

const cookieHeader = req.headers.get("cookie") || "";
let tokenFromCookie = "";
if (cookieHeader) {
  const cookies = Object.fromEntries(cookieHeader.split(';').map(s => s.trim().split('=')));
  tokenFromCookie = cookies['accessToken'] || cookies['access_token'] || cookies['jwt'] || "";
}
const authHeader = req.headers.get("authorization") || (tokenFromCookie ? `Bearer ${tokenFromCookie}` : "");
// then use authHeader same as before:
if (!authHeader.startsWith("Bearer ")) {
  return error("Unauthorized.", {}, 401);
}
const token = authHeader.split(" ")[1];
   
  

    const body = await req.json();

    if (!body.full_name || !body.dob || !body.gender_code || !body.parent_ids?.length) {
      return error("Required fields missing", {}, 422);
    }
    
    for (const pid of body.parent_ids) {
      if (!mongoose.Types.ObjectId.isValid(pid)) {
        return error("Invalid parent id", {}, 422);
      }
      const exists = await ParentMaster.findById(pid);
      if (!exists) return error("Parent not found", {}, 422);
    }
    // const body = await req.json();
    // if (!body.parent_ids?.length) return error("Parent required", {}, 422);

    const parent = await ParentMaster.findById(body.parent_ids[0]);
    if (!parent) return error("Parent not found", {}, 404);

    const count = await ChildMaster.countDocuments();
    const child_id = `CHD${String(count + 1).padStart(5, "0")}`;

  // const child_id = await generateChildId();

    const doc = await ChildMaster.create({
      child_id,
      full_name: body.full_name,
      dob: new Date(body.dob),
      gender_code: body.gender_code,
      blood_group_code: body.blood_group_code,
      birth_weight_kg: body.birth_weight_kg,
      birth_length_cm: body.birth_length_cm,
      place_of_birth: body.place_of_birth,
      hospital_name: body.hospital_name,
      birth_registration_id: body.birth_registration_id,
      parent_ids: body.parent_ids,
      photo: body.photo,
      primary_contact: body.primary_contact,
      preferred_clinic_id: body.preferred_clinic_id,
      notes: body.notes,
      consent_data_sharing: body.consent_data_sharing,
    });

    return success("Child created", doc);
  } catch (e: any) {
    return error("Server error", { server: e.message }, 500);
  }
}




// export async function GET(req: Request) {
//   try {
//     await connectMongo();
//    //  await requireAuth(req);
//     const children = await ChildMaster.find().lean();
//     return success("Children fetched", children);
//   } catch (e: any) {
//     return error("Server error", { server: e.message }, 500);
//   }
// }

export async function GET() {
  await connectMongo();
  const children = await ChildMaster.find().sort({ createdAt: -1 }).lean();
  return success("Children list", children);
}