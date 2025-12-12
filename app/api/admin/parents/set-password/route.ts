import ParentMaster from "@/models/ParentMaster";
import bcrypt from "bcrypt";
import { success, error } from "@/lib/response";
import { connectMongo } from "@/lib/mongoose";

export async function POST(req: Request) {
  await connectMongo();
  const { token, password } = await req.json();

  const user = await ParentMaster.findOne({
    set_password_token: token,
    set_password_expiry: { $gt: new Date() },
  });

  if (!user) {
    return error("Invalid or expired token", {}, 400);
  }

  const hashed = await bcrypt.hash(password, 10);

  user.password = hashed;
  user.set_password_token = null;
  user.set_password_expiry = null;

  await user.save();

  return success("Password set successfully", {});
}
