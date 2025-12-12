import { connectMongo } from "@/lib/mongoose";
import ParentMaster from "@/models/ParentMaster";
import { success, error } from "@/lib/response";

export async function GET() {
  await connectMongo();
  const parents = await ParentMaster.find().sort({ createdAt: -1 }).lean();
  return success("Parents list", parents);
}