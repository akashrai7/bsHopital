// /models/AefiSeverityMaster.ts
import mongoose, { Schema, Document } from "mongoose";

export interface IAefiSeverityMaster extends Document {
  code: string;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

const AefiSeverityMasterSchema = new Schema<IAefiSeverityMaster>(
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
    collection: "aefi_severity_master", // जैसा आपने नाम बोला
  }
);

// ensure unique index on code
AefiSeverityMasterSchema.index({ code: 1 }, { unique: true });

export default mongoose.models.AefiSeverityMaster ||
  mongoose.model<IAefiSeverityMaster>("AefiSeverityMaster", AefiSeverityMasterSchema);
