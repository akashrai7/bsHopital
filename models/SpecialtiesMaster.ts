
import mongoose, { Schema, Document } from "mongoose";

export interface ISettingSpecialties extends Document {
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

const SettingSpecialtieSchema = new Schema<ISettingSpecialties>(
  {
    name: { type: String, required: true, trim: true, unique: true, lowercase: false },
  },
  { timestamps: true }
);

// ensure index on name (unique)
// SettingSpecialtieSchema.index({ name: 1 }, { unique: true });

export default mongoose.models.SettingSpecialties ||
  mongoose.model<ISettingSpecialties>("SettingSpecialties", SettingSpecialtieSchema);