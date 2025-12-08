// /models/DoseTypeMaster.ts
import mongoose, { Schema, Document } from "mongoose";

export interface IDoseTypeMaster extends Document {
  code: string;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

const DoseTypeMasterSchema = new Schema<IDoseTypeMaster>(
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
    collection: "dose_type_master", // जैसा आपने नाम बोला
  }
);

// ensure unique index on code
// DoseTypeMasterSchema.index({ code: 1 }, { unique: true });

export default mongoose.models.DoseTypeMaster ||
  mongoose.model<IDoseTypeMaster>("DoseTypeMaster", DoseTypeMasterSchema);
