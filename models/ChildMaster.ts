import mongoose, { Schema } from "mongoose";

const ChildSchema = new Schema(
  {
    child_id: { type: String, unique: true },
    full_name: { type: String, required: true },
    dob: { type: Date, required: true },
    gender_code: { type: String, required: true },
    blood_group_code: String,
    birth_weight_kg: Number,
    birth_length_cm: Number,
    place_of_birth: String,
    hospital_name: String,
    birth_registration_id: String,
    parent_ids: [{ type: Schema.Types.ObjectId, ref: "ParentMaster", required: true }],
    photo: String,
    primary_contact: String,
    preferred_clinic_id: String,
    notes: String,
    consent_data_sharing: { type: Boolean, default: false },
  },
  { timestamps: true, collection: "child_master" }
);

export default mongoose.models.ChildMaster ||
   mongoose.model("ChildMaster", ChildSchema);

// import mongoose, { Schema, Document, Types } from "mongoose";

// export interface IChildMaster extends Document {
//   child_id: string;
//   full_name: string;
//   dob: Date;
//   gender_code: string;
//   blood_group_code?: string;
//   birth_weight_kg?: number;
//   birth_length_cm?: number;
//   place_of_birth?: string;
//   hospital_name?: string;
//   birth_registration_id?: string;
//   parent_ids: Types.ObjectId[];
//   photo?: string;
//   primary_contact?: string;
//   preferred_clinic_id?: string;
//   notes?: string;
//   consent_data_sharing: boolean;
//   createdAt: Date;
//   updatedAt: Date;
// }

// const ChildSchema = new Schema<IChildMaster>(
//   {
//     child_id: { type: String, required: true, unique: true },
//     full_name: { type: String, required: true },
//     dob: { type: Date, required: true },
//     gender_code: { type: String, required: true },
//     blood_group_code: String,
//     birth_weight_kg: Number,
//     birth_length_cm: Number,
//     place_of_birth: String,
//     hospital_name: String,
//     birth_registration_id: String,
//     parent_ids: [{ type: Schema.Types.ObjectId, ref: "ParentMaster", required: true }],
//     photo: String,
//     primary_contact: String,
//     preferred_clinic_id: String,
//     notes: String,
//     consent_data_sharing: { type: Boolean, default: false },
//   },
//   { timestamps: true }
// );

// export default mongoose.models.ChildMaster ||
//   mongoose.model<IChildMaster>("ChildMaster", ChildSchema);