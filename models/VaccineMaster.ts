// import mongoose, { Schema, model, models } from "mongoose";

// const VaccineMasterSchema = new Schema(
//   {
//     week_range_id: {
//       type: Schema.Types.ObjectId,
//       ref: "WeekRangeMaster",
//       required: true,
//     },
//     name: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     dose_type_id: {
//       type: Schema.Types.ObjectId,
//       ref: "DoseTypeMaster",
//       required: true,
//     },
//     vaccine_site_id: {
//       type: Schema.Types.ObjectId,
//       ref: "VaccineSiteMaster",
//       required: true,
//     },
//     status: {
//       type: String,
//       enum: ["active", "inactive"],
//       default: "active",
//     },
//   },
//   { timestamps: true }
// );

// export default models.VaccineMaster ||
//   model("VaccineMaster", VaccineMasterSchema);


import mongoose, { Schema, models, model } from "mongoose";

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

    vaccine_code: {
      type: String,
      required: true,
      trim: true,
      uppercase: true,
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

    is_mandatory: {
      type: Boolean,
      default: false,
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
