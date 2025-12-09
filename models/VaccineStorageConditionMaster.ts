// /models/VaccineStorageConditionMaster.ts
import mongoose, { Schema, Document } from "mongoose";

export interface IVaccineStorageConditionMaster extends Document {
  code: string;
  condition: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

const VaccineStorageConditionMasterSchema =
  new Schema<IVaccineStorageConditionMaster>(
    {
      code: {
        type: String,
        required: true,
        trim: true,
        uppercase: true,
        unique: true,
      },
      condition: {
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
      collection: "vaccine_storage_condition_master", // आपका दिया नाम
    }
  );

// unique index on code
// VaccineStorageConditionMasterSchema.index({ code: 1 }, { unique: true });

export default mongoose.models.VaccineStorageConditionMaster ||
  mongoose.model<IVaccineStorageConditionMaster>(
    "VaccineStorageConditionMaster",
    VaccineStorageConditionMasterSchema
  );
