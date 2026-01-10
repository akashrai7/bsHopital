import mongoose, { Schema, models, model } from "mongoose";

const VaccineBrandSchema = new Schema(
  {
    vaccine_id: {
      type: Schema.Types.ObjectId,
      ref: "VaccineMaster",
      required: true,
    },

    

    brand_name: {
      type: String,
      required: true,
      trim: true,
    },

    manufacturer_id: {
      type: Schema.Types.ObjectId,
      ref: "VaccineManufacturerMaster",
      required: true,
    },

    antigen_composition: {
      type: String,
      default: "",
    },

    dosage_form_id: {
      type: Schema.Types.ObjectId,
      ref: "DoseTypeMaster",
      required: true,
    },

    vial_type: {
      type: String,
      required: true,
      trim: true,
    },

    storage_condition_id: {
      type: Schema.Types.ObjectId,
      ref: "VaccineStorageConditionMaster",
      required: true,
    },

    is_active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default models.VaccineBrandMaster ||
  model("VaccineBrandMaster", VaccineBrandSchema);
