// /models/VaccineSiteMaster.ts
import mongoose, { Schema, Document } from "mongoose";

export interface IVaccineSiteMaster extends Document {
  code: string;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

const VaccineSiteMasterSchema = new Schema<IVaccineSiteMaster>(
  {
    code: {
      type: String,
      required: true,
      trim: true,
      uppercase: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
    collection: "vaccine_site_master", // आपका दिया हुआ नाम
  }
);

// ensure unique index on code
// VaccineSiteMasterSchema.index({ code: 1 }, { unique: true });

export default mongoose.models.VaccineSiteMaster ||
  mongoose.model<IVaccineSiteMaster>("VaccineSiteMaster", VaccineSiteMasterSchema);
