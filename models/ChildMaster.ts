// models/ChildMaster.ts
import mongoose, { Schema, Document } from "mongoose";

export interface IChildMaster extends Document {
  child_id: string;
  full_name: string;
  dob: Date;
  gender_code: string;
  blood_group_code?: string;
  birth_weight_kg?: number;
  birth_length_cm?: number;
  place_of_birth?: string;
  hospital_name?: string;
  birth_registration_id?: string;
  parent_ids: mongoose.Types.ObjectId[]; // refs to ParentMaster
  photo?: string;
  primary_contact?: string;
  preferred_clinic_id?: mongoose.Types.ObjectId | string;
  notes?: string;
  consent_data_sharing?: boolean;
  schedule_generated_at?: Date | null;
  next_due_vaccine?: string | null;
  is_active?: boolean;
  created_at?: Date;
  updated_at?: Date;
}

const ChildSchema = new Schema<IChildMaster>(
  {
    child_id: { type: String, required: true, unique: true, index: true },
    full_name: { type: String, required: true, trim: true },
    dob: { type: Date, required: true },
    gender_code: { type: String, required: true },
    blood_group_code: { type: String },
    birth_weight_kg: { type: Number },
    birth_length_cm: { type: Number },
    place_of_birth: { type: String },
    hospital_name: { type: String },
    birth_registration_id: { type: String },
    parent_ids: [{ type: Schema.Types.ObjectId, ref: "ParentMaster", required: true }],
    photo: { type: String },
    primary_contact: { type: String },
    preferred_clinic_id: { type: Schema.Types.ObjectId, ref: "Clinic", required: false },
    notes: { type: String },
    consent_data_sharing: { type: Boolean, default: false },
    schedule_generated_at: { type: Date, default: null },
    next_due_vaccine: { type: String, default: null },
    is_active: { type: Boolean, default: true },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    collection: "child_master",
  }
);

// Hot reload safe
export default (mongoose.models.ChildMaster as mongoose.Model<IChildMaster>) ||
  mongoose.model<IChildMaster>("ChildMaster", ChildSchema);