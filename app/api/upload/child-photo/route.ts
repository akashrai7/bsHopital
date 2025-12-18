import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get("file") as File;
  if (!file) return NextResponse.json({ status: false });

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const name = `${Date.now()}-${file.name}`;
  const uploadPath = path.join(process.cwd(), "public/uploads/children");

  if (!fs.existsSync(uploadPath)) fs.mkdirSync(uploadPath, { recursive: true });
  fs.writeFileSync(path.join(uploadPath, name), buffer);

  return NextResponse.json({
    status: true,
    data: { url: `/uploads/children/${name}` },
  });
}