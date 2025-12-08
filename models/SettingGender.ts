// /models/SettingGender.ts
import mongoose, { Schema, Document } from "mongoose";

export interface ISettingGender extends Document {
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

const SettingGenderSchema = new Schema<ISettingGender>(
  {
    name: { type: String, required: true, trim: true, unique: true, lowercase: false },
  },
  { timestamps: true }
);

// ensure index on name (unique)
// SettingGenderSchema.index({ name: 1 }, { unique: true });

export default mongoose.models.SettingGender ||
  mongoose.model<ISettingGender>("SettingGender", SettingGenderSchema);
