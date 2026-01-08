import mongoose, { Schema, Document, Types } from "mongoose";

export interface IDoctorAddress {
  line1?: string;
  line2?: string;
  city?: string;
  pincode?: string;
  country?: Types.ObjectId;
  state?: Types.ObjectId;
  district?: Types.ObjectId;
}

export interface IDoctorMaster extends Document {
  doctor_uid: string;
  first_name: string;
  middle_name?: string;
  last_name: string;
  email?: string;
  phone: string;
  aadhaar?: string;
  password: string; // hashed
  preferred_language?: Types.ObjectId;
  specialty?: Types.ObjectId;
  medical_registration_number: string;
  registration_council: string;
  qualifications: string;
  years_experience?: number;
  clinic_id?: Types.ObjectId;


  address?: IDoctorAddress;
  profile_photo?: string;
  license_document: String;
  consent_whatsapp?: boolean;
  consent_whatsapp_ts?: Date | null;
  consent_whatsapp_ip?: string | null;
  terms_accepted?: boolean;
  terms_version?: string | null;
  terms_accepted_at?: Date | null;
  admin_notes?: string;
  created_by?: "admin" | "self";
  createdAt: Date;
  updatedAt: Date;
  is_active: boolean;
}

const DoctorAddressSchema = new Schema<IDoctorAddress>(
  {
    line1: { type: String, trim: true },
    line2: { type: String, trim: true },
    city: { type: String, trim: true },
    pincode: { type: String, trim: true },
    country: { type: Schema.Types.ObjectId, ref: "CountryMaster" },
    state: { type: Schema.Types.ObjectId, ref: "StateMaster" },
    district: { type: Schema.Types.ObjectId, ref: "DistrictMaster" },
  },
  { _id: false }
);

const DoctorMasterSchema = new Schema<IDoctorMaster>(
  {
    doctor_uid: { type: String, required: true, unique: true, index: true },
    first_name: { type: String, required: true, trim: true },
    middle_name: { type: String, trim: true },
    last_name: { type: String, required: true, trim: true },
    email: { type: String, trim: true, lowercase: true, index: true, sparse: true },
    phone: { type: String, required: true, unique: true, index: true }, // E.164
    aadhaar: { type: String, unique: true, sparse: true },
    password: { type: String, required: true },
    preferred_language: { type: Schema.Types.ObjectId, ref: "LanguageMaster" },
    specialty: { type: Schema.Types.ObjectId, ref: "SpecialtiesMaster" },
    medical_registration_number: {
      type: String,
      required: [true, "Medical registration number is required"],
      unique: true,
      trim: true,
    },
    registration_council: {
      type: String,
      required: [true, "Registration council is required"],
      trim: true,
    },
    qualifications: {
      type: String,
      required: [true, "Qualifications are required"],
      trim: true,
    },
   
    years_experience: {
      type: Number,
      min: 0,
    },
    clinic_id: { type: Schema.Types.ObjectId, ref: "ClinicMaster", },
    
    address: { type: DoctorAddressSchema },
    profile_photo: { type: String, trim: true },
    license_document: { type: String, required: true },
    consent_whatsapp: { type: Boolean, default: false },
    consent_whatsapp_ts: { type: Date, default: null },
    consent_whatsapp_ip: { type: String, default: null },
    terms_accepted: { type: Boolean, default: false },
    terms_version: { type: String, default: null },
    terms_accepted_at: { type: Date, default: null },
    admin_notes: { type: String, trim: true },
    created_by: { type: String, enum: ["admin", "self"], default: "self" },
    is_active: { type: Boolean, default: true },
  },
  {
    timestamps: true,
    collection: "doctors",
  }
);

export default mongoose.models.DoctorMaster ||
  mongoose.model<IDoctorMaster>("DoctorMaster", DoctorMasterSchema);