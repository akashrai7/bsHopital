// /models/NationalityMaster.ts
import mongoose, { Schema, Document } from "mongoose";

export interface INationalityMaster extends Document {
  code: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

const NationalityMasterSchema = new Schema<INationalityMaster>(
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
  },
  {
    timestamps: true,
    collection: "nationality_master", // जैसा आपने नाम बोला
  }
);

// ensure unique index on code
// NationalityMasterSchema.index({ code: 1 }, { unique: true });

export default mongoose.models.NationalityMaster ||
  mongoose.model<INationalityMaster>("NationalityMaster", NationalityMasterSchema);
