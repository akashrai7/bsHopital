// models/ChildMaster.ts

import mongoose, { Schema, Types, model, models } from "mongoose";

/* ================= TYPES ================= */

export interface IChild {
  child_id: string;
  full_name: string;
  dob: Date;
  gender_code: "M" | "F" | "O";
  blood_group_code?: "A+" | "A-" | "B+" | "B-" | "O+" | "O-" | "AB+" | "AB-";
  birth_weight_kg?: number;
  birth_length_cm?: number;
  place_of_birth?: string;
  hospital_name?: string;
  birth_registration_id?: string;
  parent_ids: Types.ObjectId[];
  photo?: string;
  primary_contact: string;
  preferred_clinic_id?: Types.ObjectId;
  notes?: string;
  consent_data_sharing: boolean;
}

/* ================= SCHEMA ================= */

const ChildSchema = new Schema<IChild>(
  {
    child_id: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      index: true,
    },

    full_name: {
      type: String,
      required: true,
      trim: true,
    },

    dob: {
      type: Date,
      required: true,
    },

    gender_code: {
      type: String,
      enum: ["M", "F", "O"],
      required: true,
    },

    blood_group_code: {
      type: String,
      enum: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
    },

    birth_weight_kg: {
      type: Number,
      min: 0,
    },

    birth_length_cm: {
      type: Number,
      min: 0,
    },

    place_of_birth: String,

    hospital_name: String,

    birth_registration_id: String,

    parent_ids: [
      {
        type: Schema.Types.ObjectId,
        ref: "ParentMaster",
        required: true,
        index: true,
      },
    ],

    photo: String,

    primary_contact: {
      type: String,
      required: true,
      trim: true,
    },

    preferred_clinic_id: {
      type: Schema.Types.ObjectId,
      ref: "ClinicMaster",
    },

    notes: String,

    consent_data_sharing: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    collection: "child_master",
  }
);

/* ================= EXPORT ================= */

const ChildMaster =
  models.ChildMaster || model<IChild>("ChildMaster", ChildSchema);

export default ChildMaster;
