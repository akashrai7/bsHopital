// /models/RouteOfAdministrationMaster.ts
import mongoose, { Schema, Document } from "mongoose";

export interface IRouteOfAdministrationMaster extends Document {
  code: string;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

const RouteOfAdministrationMasterSchema = new Schema<IRouteOfAdministrationMaster>(
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
    collection: "route_of_administration_master", // जैसा आपने नाम बोला
  }
);

// ensure unique index on code
RouteOfAdministrationMasterSchema.index({ code: 1 }, { unique: true });

export default mongoose.models.RouteOfAdministrationMaster ||
  mongoose.model<IRouteOfAdministrationMaster>(
    "RouteOfAdministrationMaster",
    RouteOfAdministrationMasterSchema
  );