// /models/Admin.ts
import mongoose, { Schema, Document } from "mongoose";

export interface IAdmin extends Document {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  photo?: string | null;
  password: string; 
  createdAt: Date;
  updatedAt: Date;
}

const AdminSchema = new Schema<IAdmin>(
  {
    first_name: { type: String, required: true, trim: true },
    last_name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    phone: { type: String, required: true, trim: true },
    photo: { type: String },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Admin ||
  mongoose.model<IAdmin>("Admin", AdminSchema);
