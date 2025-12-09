import mongoose, { Schema, Document, Types } from "mongoose";

export interface IDistrictMaster extends Document {
  country: Types.ObjectId;
  state: Types.ObjectId;
  code: string;
  name: string;
  is_active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const DistrictMasterSchema = new Schema<IDistrictMaster>(
  {
    country: {
      type: Schema.Types.ObjectId,
      ref: "CountryMaster",
      required: true,
    },
    state: {
      type: Schema.Types.ObjectId,
      ref: "StateMaster",
      required: true,
    },
    code: {
      type: String,
      required: true,
      trim: true,
      uppercase: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    collection: "district_master",
  }
);

// एक state में same code दो बार न हो
 DistrictMasterSchema.index({ state: 1, code: 1 }, { unique: true });

export default mongoose.models.DistrictMaster ||
  mongoose.model<IDistrictMaster>("DistrictMaster", DistrictMasterSchema);
