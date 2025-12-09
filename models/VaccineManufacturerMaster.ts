// /models/VaccineManufacturerMaster.ts
import mongoose, { Schema, Document } from "mongoose";

export interface IVaccineManufacturerMaster extends Document {
  name: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

const VaccineManufacturerMasterSchema = new Schema<IVaccineManufacturerMaster>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true, // same manufacturer name दो बार नहीं
    },
    description: {
      type: String,
      trim: true,
      default: "",
    },
  },
  {
    timestamps: true,
    collection: "vaccine_manufacturer_master", // जैसा आपने नाम बोला
  }
);

// unique index on name
// VaccineManufacturerMasterSchema.index({ name: 1 }, { unique: true });

export default mongoose.models.VaccineManufacturerMaster ||
  mongoose.model<IVaccineManufacturerMaster>(
    "VaccineManufacturerMaster",
    VaccineManufacturerMasterSchema
  );