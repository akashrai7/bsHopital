import { connectMongo } from "@/lib/mongoose";
import ParentAuditLog from "@/models/ParentAuditLog";
import { success } from "@/lib/response";

export async function GET(req: Request, { params }: any) {
  await connectMongo();
 
  const { id } = await params;

  const logs = await ParentAuditLog.find({ parent_id: id })
    .sort({ createdAt: -1 })
    .lean();

  return success("Parent audit history", logs);
}
