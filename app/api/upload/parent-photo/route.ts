import { NextRequest } from "next/server";
import { success, error } from "@/lib/response";
import path from "path";
import fs from "fs/promises";
import crypto from "crypto";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return error("File required", {}, 400);
    }

    const allowed = ["image/jpeg", "image/png", "image/jpg"];
    if (!allowed.includes(file.type)) {
      return error("Invalid file type", {}, 400);
    }

    if (file.size > 5 * 1024 * 1024) {
      return error("Max file size 5MB", {}, 400);
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const ext = file.name.split(".").pop();
    const filename = `parent-${Date.now()}-${crypto.randomUUID()}.${ext}`;
    const uploadDir = path.join(process.cwd(), "public/uploads/parents");

    await fs.mkdir(uploadDir, { recursive: true });
    await fs.writeFile(path.join(uploadDir, filename), buffer);

    const fileUrl = `/uploads/parents/${filename}`;

    return success("Uploaded", { url: fileUrl });
  } catch (err: any) {
    console.error("upload error", err);
    return error("Upload failed", { server: err.message }, 500);
  }
}