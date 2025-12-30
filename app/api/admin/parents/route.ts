// /api/admin/parents/route.ts

import { connectMongo } from "@/lib/mongoose";
import ParentMaster from "@/models/ParentMaster";
import ChildMaster from "@/models/ChildMaster";
import { success, error } from "@/lib/response";
import { verifyAccessToken } from "@/lib/jwt";


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

// export async function GET(req: Request) {
//   try {
//        await connectMongo();
//         await getAuthToken(req);

//     const parents = await ParentMaster.find()
//       .select("-password")
//       .sort({ createdAt: -1 })
//       .populate("address.country", "name code")
//       .populate("address.state", "name code")
//       .populate("address.district", "name code")
//       .lean();

//     return success("Parents list", parents);
//   } catch (err: any) {
//     console.error("GET /api/admin/parents error:", err);
//     return error("Failed to load parents", {}, 500);
//   }
// }

export async function GET() {
  try {
    await connectMongo();

    const parents = await ParentMaster.find()
      .select("-password")
      .sort({ createdAt: -1 })
      .populate("address.country", "name")
      .populate("address.state", "name")
      .populate("address.district", "name")
      .lean();

    const parentIds = parents.map(p => p._id);

    // 🔥 FIXED QUERY (parent_ids ARRAY)
    const children = await ChildMaster.find({
      parent_ids: { $in: parentIds },
    })
      .select("full_name parent_ids")
      .lean();

    // map children to parents
    const map: Record<string, any[]> = {};

    children.forEach(c => {
      c.parent_ids.forEach((pid: any) => {
        const key = String(pid);
        if (!map[key]) map[key] = [];
        map[key].push({
          _id: c._id,
          full_name: c.full_name,
        });
      });
    });

    const result = parents.map(p => ({
      ...p,
      children: map[String(p._id)] || [],
    }));

    return success("Parents list", result);
  } catch (e) {
    console.error("GET /api/admin/parents error:", e);
    return error("Failed to load parents", {}, 500);
  }
}