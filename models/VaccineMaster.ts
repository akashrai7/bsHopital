import mongoose, { Schema, model, models } from "mongoose";

const VaccineMasterSchema = new Schema(
  {
    week_range_id: {
      type: Schema.Types.ObjectId,
      ref: "WeekRangeMaster",
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    dose_type_id: {
      type: Schema.Types.ObjectId,
      ref: "DoseTypeMaster",
      required: true,
    },
    vaccine_site_id: {
      type: Schema.Types.ObjectId,
      ref: "VaccineSiteMaster",
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  { timestamps: true }
);

export default models.VaccineMaster ||
  model("VaccineMaster", VaccineMasterSchema);
