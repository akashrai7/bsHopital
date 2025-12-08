// /models/CountryMaster.ts
import mongoose, { Schema, Document } from "mongoose";

export interface ICountryMaster extends Document {
  code: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

const CountryMasterSchema = new Schema<ICountryMaster>(
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
    collection: "country_master", // जैसा आपने नाम बोला
  }
);

// ensure unique index on code
// CountryMasterSchema.index({ code: 1 }, { unique: true });

export default mongoose.models.CountryMaster ||
  mongoose.model<ICountryMaster>("CountryMaster", CountryMasterSchema);
