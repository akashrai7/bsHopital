// // api/admin/children/route.ts

// import { connectMongo } from "@/lib/mongoose";
// import ChildMaster from "@/models/ChildMaster";
// import ParentMaster from "@/models/ParentMaster";
// import { success, error } from "@/lib/response";
// import { verifyAccessToken } from "@/lib/jwt";
// import mongoose from "mongoose";


// export async function POST(req: Request) {
//   try {
//     await connectMongo();

// const cookieHeader = req.headers.get("cookie") || "";
// let tokenFromCookie = "";
// if (cookieHeader) {
//   const cookies = Object.fromEntries(cookieHeader.split(';').map(s => s.trim().split('=')));
//   tokenFromCookie = cookies['accessToken'] || cookies['access_token'] || cookies['jwt'] || "";
// }
// const authHeader = req.headers.get("authorization") || (tokenFromCookie ? `Bearer ${tokenFromCookie}` : "");
// // then use authHeader same as before:
// if (!authHeader.startsWith("Bearer ")) {
//   return error("Unauthorized.", {}, 401);
// }
// const token = authHeader.split(" ")[1];
   
  

//     const body = await req.json();

//     if (!body.full_name || !body.dob || !body.gender_code || !body.parent_ids?.length) {
//       return error("Required fields missing", {}, 422);
//     }
    
//     for (const pid of body.parent_ids) {
//       if (!mongoose.Types.ObjectId.isValid(pid)) {
//         return error("Invalid parent id", {}, 422);
//       }
//       const exists = await ParentMaster.findById(pid);
//       if (!exists) return error("Parent not found", {}, 422);
//     }

//     const parent = await ParentMaster.findById(body.parent_ids[0]);
//     if (!parent) return error("Parent not found", {}, 404);

//     const count = await ChildMaster.countDocuments();
//     const child_id = `CHD${String(count + 1).padStart(5, "0")}`;


//     const doc = await ChildMaster.create({
//       child_id,
//       full_name: body.full_name,
//       dob: new Date(body.dob),
//       gender_code: body.gender_code,
//       blood_group_code: body.blood_group_code,
//       birth_weight_kg: body.birth_weight_kg,
//       birth_length_cm: body.birth_length_cm,
//       place_of_birth: body.place_of_birth,
//       hospital_name: body.hospital_name,
//       birth_registration_id: body.birth_registration_id,
//       parent_ids: body.parent_ids,
//       photo: body.photo,
//       primary_contact: body.primary_contact,
//       preferred_clinic_id: body.preferred_clinic_id,
//       notes: body.notes,
//       consent_data_sharing: body.consent_data_sharing,
//     });

//     return success("Child created", doc);
//   } catch (e: any) {
//     return error("Server error", { server: e.message }, 500);
//   }
// }




// export async function GET() {
//   await connectMongo();
//   const children = await ChildMaster.find().sort({ createdAt: -1 }).lean();
//   return success("Children list", children);
// }

// api/admin/children/route.ts

import { connectMongo } from "@/lib/mongoose";
import ChildMaster from "@/models/ChildMaster";
import ParentMaster from "@/models/ParentMaster";
import ChildAuditLog from "@/models/ChildAuditLog";
import { success, error } from "@/lib/response";
import { verifyAccessToken } from "@/lib/jwt";
import mongoose from "mongoose";

async function getAuthToken(req: Request) {
  const cookieHeader = req.headers.get("cookie") || "";
  const cookies = Object.fromEntries(
    cookieHeader.split(";").map(c => c.trim().split("="))
  );

  const token =
    req.headers.get("authorization")?.replace("Bearer ", "") ||
    cookies.accessToken ||
    cookies.access_token ||
    cookies.jwt;

  if (!token) throw new Error("Unauthorized");

  return verifyAccessToken(token); // ✅ real verification
}

export async function POST(req: Request) {
  try {
    await connectMongo();
    const user = await getAuthToken(req);

    const body = await req.json();

    if (
      !body.full_name ||
      !body.dob ||
      !body.gender_code ||
      !Array.isArray(body.parent_ids) ||
      body.parent_ids.length === 0
    ) {
      return error("Required fields missing", {}, 422);
    }

    /* ✅ validate parents in ONE query */
    const parents = await ParentMaster.find({
      _id: { $in: body.parent_ids },
    }).select("_id");

    if (parents.length !== body.parent_ids.length) {
      return error("One or more parents not found", {}, 422);
    }

    /* ✅ SAFE child_id generation */
    const lastChild = await ChildMaster.findOne()
      .sort({ createdAt: -1 })
      .select("child_id")
      .lean();

    const lastNumber = lastChild
      ? parseInt(lastChild.child_id.replace("CHD", ""), 10)
      : 0;

    const child_id = `CHD${String(lastNumber + 1).padStart(5, "0")}`;

    const doc = await ChildMaster.create({
      child_id,
      full_name: body.full_name.trim(),
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
      created_by: user.id, // 🔐 audit ready
    });

    await ChildAuditLog.create({
  child_id: doc._id,
  action: "CREATE",
  changed_by: user.id,
  changed_by_role: user.role,
  changes: {},
});


    return success("Child created", doc);
  } catch (e: any) {
    return error(
      e.message === "Unauthorized" ? "Unauthorized" : "Server error",
      {},
      e.message === "Unauthorized" ? 401 : 500
    );
  }
}

export async function GET(req: Request) {
  try {
    await connectMongo();
    await getAuthToken(req);

    const { searchParams } = new URL(req.url);

    const page = Number(searchParams.get("page") || 1);
    const limit = Number(searchParams.get("limit") || 10);
    const search = searchParams.get("search") || "";
    const gender = searchParams.get("gender");

    const query: any = {};

    if (search) {
      query.$or = [
        { full_name: { $regex: search, $options: "i" } },
        { child_id: { $regex: search, $options: "i" } },
      ];
    }

    if (gender) query.gender_code = gender;

    const [data, total] = await Promise.all([
      ChildMaster.find(query)
        .populate("parent_ids", "first_name")
        .sort({ createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(limit)
        .lean(),

      ChildMaster.countDocuments(query),
    ]);

    return success("Children list", {
      data,
      total,
      totalPages: Math.ceil(total / limit),
      page,
    });
  } catch {
    return error("Unauthorized", {}, 401);
  }
}
