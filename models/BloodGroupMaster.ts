// /models/BloodGroupMaster.ts
import mongoose, { Schema, Document } from "mongoose";

export interface IBloodGroupMaster extends Document {
  code: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

const BloodGroupMasterSchema = new Schema<IBloodGroupMaster>(
  {
    code: { type: String, required: true, trim: true, uppercase: true, unique: true },
    name: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
    collection: "blood_group_master", // <<-- collection name as you said
  }
);

// unique index on code (already in schema)
// BloodGroupMasterSchema.index({ code: 1 }, { unique: true });

export default mongoose.models.BloodGroupMaster ||
  mongoose.model<IBloodGroupMaster>("BloodGroupMaster", BloodGroupMasterSchema);