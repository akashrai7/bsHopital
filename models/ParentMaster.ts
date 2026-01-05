// /models/ParentMaster.ts
import mongoose, { Schema, Document, Types } from "mongoose";

export interface IParentAddress {
  line1?: string;
  line2?: string;
  city?: string;
  pincode?: string;
  country?: Types.ObjectId;
  state?: Types.ObjectId;
  district?: Types.ObjectId;
}

export interface IParentMaster extends Document {
  parent_uid: string;
  first_name: string;
  middle_name?: string;
  last_name: string;
  email?: string;
  phone: string;
  aadhaar?: string;
  password: string; // hashed
  preferred_language?: Types.ObjectId;
  relationship_to_child?: Types.ObjectId;
  address?: IParentAddress;
  national_id?: string;
  profile_photo?: string;
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
  kyc: {
  status: {
    type: String,
    enum: ["not_started", "otp_sent", "verified", "failed"],
    default: "not_started"
  },
  verifiedAt: { type: Date },
  lastAttemptAt: { type: Date },
  totalAttempts: { type: Number, default: 0 }
}
}

const ParentAddressSchema = new Schema<IParentAddress>(
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

const ParentMasterSchema = new Schema<IParentMaster>(
  {
    parent_uid: { type: String, required: true, unique: true, index: true },
    first_name: { type: String, required: true, trim: true },
    middle_name: { type: String, trim: true },
    last_name: { type: String, required: true, trim: true },
    email: { type: String, trim: true, lowercase: true, index: true, sparse: true },
    phone: { type: String, required: true, unique: true, index: true }, // E.164
    aadhaar: { type: String, trim: true, unique: true, sparse: true },
    password: { type: String, required: true },
    preferred_language: { type: Schema.Types.ObjectId, ref: "LanguageMaster" },
    relationship_to_child: { type: Schema.Types.ObjectId, ref: "RelationshipTypeMaster" },
    address: { type: ParentAddressSchema },
    national_id: { type: String, trim: true },
    profile_photo: { type: String, trim: true },
    consent_whatsapp: { type: Boolean, default: false },
    consent_whatsapp_ts: { type: Date, default: null },
    consent_whatsapp_ip: { type: String, default: null },
    terms_accepted: { type: Boolean, default: false },
    terms_version: { type: String, default: null },
    terms_accepted_at: { type: Date, default: null },
    admin_notes: { type: String, trim: true },
    created_by: { type: String, enum: ["admin", "self"], default: "self" },
    is_active: { type: Boolean, default: true },
    kyc: {
      status: {
        type: String,
        enum: ["not_started", "otp_sent", "verified", "failed"],
        default: "not_started"
      },
      verifiedAt: { type: Date, default: null },
      lastAttemptAt: { type: Date, default: null },
      totalAttempts: { type: Number, default: 0 }
    }
  },
  {
    timestamps: true,
    collection: "parents",
  }
);

// indexes: (some are already declared above with unique/index)
// ParentMasterSchema.index({ email: 1 }, { unique: true, sparse: true });
// ParentMasterSchema.index({ phone: 1 }, { unique: true });
// ParentMasterSchema.index({ aadhaar: 1 }, { unique: true, sparse: true });

export default mongoose.models.ParentMaster ||
  mongoose.model<IParentMaster>("ParentMaster", ParentMasterSchema);