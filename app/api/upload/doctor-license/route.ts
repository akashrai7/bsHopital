
// import { NextRequest, NextResponse } from "next/server";
// import path from "path";
// import fs from "fs/promises";
// import crypto from "crypto";

// export const runtime = "nodejs";

// const UPLOAD_DIR = path.join(process.cwd(), "public/uploads/doctors");
// const MAX_SIZE = 5 * 1024 * 1024; // 5MB
// const ALLOWED_TYPES = [
//   "image/jpeg",
//   "image/png",
//   "application/pdf",
// ];

// export async function POST(req: NextRequest) {
//   try {
//     const formData = await req.formData();
//     const file = formData.get("file") as File | null;

//     if (!file) {
//       return NextResponse.json(
//         { status: false, message: "No file uploaded" },
//         { status: 400 }
//       );
//     }

//     if (!ALLOWED_TYPES.includes(file.type)) {
//       return NextResponse.json(
//         { status: false, message: "Invalid file type" },
//         { status: 400 }
//       );
//     }

//     if (file.size > MAX_SIZE) {
//       return NextResponse.json(
//         { status: false, message: "File size exceeds 5MB" },
//         { status: 400 }
//       );
//     }

//     await fs.mkdir(UPLOAD_DIR, { recursive: true });

//     const ext = path.extname(file.name);
//     const fileName = `doctor_${Date.now()}_${crypto.randomBytes(6).toString("hex")}${ext}`;
//     const filePath = path.join(UPLOAD_DIR, fileName);

//     const buffer = Buffer.from(await file.arrayBuffer());
//     await fs.writeFile(filePath, buffer);

//     const publicUrl = `/uploads/doctors/${fileName}`;

//     return NextResponse.json({
//       status: true,
//       message: "Upload successful",
//       data: { url: publicUrl },
//     });
//   } catch (err: any) {
//     console.error("Doctor upload error:", err);
//     return NextResponse.json(
//       { status: false, message: "Upload failed", error: err.message },
//       { status: 500 }
//     );
//   }
// }

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

    const allowed = ["image/jpeg", "application/pdf", "image/jpg"];
    if (!allowed.includes(file.type)) {
      return error("Invalid file type", {}, 400);
    }

    if (file.size > 5 * 1024 * 1024) {
      return error("Max file size 5MB", {}, 400);
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const ext = file.name.split(".").pop();
    const filename = `doctor-${Date.now()}-${crypto.randomUUID()}.${ext}`;
    const uploadDir = path.join(process.cwd(), "public/uploads/doctors-license");

    await fs.mkdir(uploadDir, { recursive: true });
    await fs.writeFile(path.join(uploadDir, filename), buffer);

    const fileUrl = `/uploads/doctors/${filename}`;

    return success("Uploaded", { url: fileUrl });
  } catch (err: any) {
    console.error("upload error", err);
    return error("Upload failed", { server: err.message }, 500);
  }
}