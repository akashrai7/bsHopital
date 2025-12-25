// // import mongoose, { Schema, Document } from "mongoose";

// // export interface IDoctor extends Document {
// //   first_name: string;
// //   last_name: string;
// //   email: string;
// //   phone: string;
// //   aadhaar: string;
// //   password: string;

// //   medical_registration_number: string;
// //   registration_council: string;
// //   qualifications: string;
// //   specialty: string;
// //   years_experience?: number;

// //   address: {
// //     country?: mongoose.Types.ObjectId;
// //     state?: mongoose.Types.ObjectId;
// //     district?: mongoose.Types.ObjectId;
// //     city?: string;
// //   };

// //   clinic_id?: string;

// //   license_document: string;
// //   photo?: string;

// //   availability?: any;
// //   service_fee?: number;
// //   bio?: string;

// //   verified: "Pending" | "Verified" | "Rejected";
// //   verification_notes?: string;

// //   is_active: boolean;
// //   createdAt: Date;
// //   updatedAt: Date;
// // }

// // const DoctorSchema = new Schema<IDoctor>(
// //   {
// //     first_name: { type: String, required: true, trim: true },
// //     last_name: { type: String, required: true, trim: true },

// //     email: { type: String, required: true, unique: true, lowercase: true },
// //     phone: { type: String, required: true, unique: true },
// //     aadhaar: { type: String, required: true, unique: true },

// //     password: { type: String, required: true },

// //     medical_registration_number: { type: String, required: true },
// //     registration_council: { type: String, required: true },
// //     qualifications: { type: String, required: true },

// //     specialty: { type: String, required: true },
// //     years_experience: { type: Number },

// //     address: {
// //       country: { type: Schema.Types.ObjectId, ref: "CountryMaster" },
// //       state: { type: Schema.Types.ObjectId, ref: "StateMaster" },
// //       district: { type: Schema.Types.ObjectId, ref: "DistrictMaster" },
// //       city: String,
// //     },

// //     clinic_id: String,

// //     license_document: { type: String, required: true },
// //     photo: String,

// //     availability: Schema.Types.Mixed,
// //     service_fee: Number,
// //     bio: { type: String, maxlength: 500 },

// //     verified: {
// //       type: String,
// //       enum: ["Pending", "Verified", "Rejected"],
// //       default: "Pending",
// //     },

// //     verification_notes: String,
// //     is_active: { type: Boolean, default: true },
// //   },
// //   { timestamps: true }
// // );

// // export default mongoose.models.DoctorMaster ||
// //   mongoose.model<IDoctor>("DoctorMaster", DoctorSchema);

// import mongoose, { Schema, Document, Model } from "mongoose";

// export interface IDoctor extends Document {
//   first_name: string;
//   last_name: string;

//   email: string;
//   phone: string;
//   aadhaar: string;
//   password: string;

//   medical_registration_number: string;
//   registration_council: string;
//   qualifications: string;
//   specialty?: string;
//   years_experience?: number;

//   clinic_id?: string;

//   address: {
//     country: string;
//     state: string;
//     district: string;
//     city: string;
//   };

//   profile_photo?: string;
//   license_document: string;

//   service_fee?: number;
//   bio?: string;

//   verified: "Pending" | "Verified" | "Rejected";
//   verification_notes?: string;

//   is_active: boolean;

//   createdAt: Date;
//   updatedAt: Date;
// }

// const DoctorSchema = new Schema<IDoctor>(
//   {
//     /* Basic */
//     first_name: { type: String, required: true, trim: true },
//     last_name: { type: String, required: true, trim: true },

//     email: {
//       type: String,
//       required: true,
//       lowercase: true,
//       unique: true,
//       index: true,
//     },

//     phone: {
//       type: String,
//       required: true,
//       unique: true,
//       index: true,
//     },

//     aadhaar: {
//       type: String,
//       required: true,
//       unique: true,
//       index: true,
//     },

//     password: { type: String, required: true },

//     /* Medical */
//     medical_registration_number: {
//       type: String,
//       required: true,
//       unique: true,
//       index: true,
//     },

//     registration_council: { type: String, required: true },
//     qualifications: { type: String, required: true },
//     specialty: { type: String, default: null  },

//     years_experience: { type: Number, default: null },

//     clinic_id: { type: String, default: null },

//     /* Address */
//     address: {
//       country: { type: String, required: true },
//       state: { type: String, required: true },
//       district: { type: String, required: true },
//       city: { type: String, required: true },
//     },

//     /* Files */
//     profile_photo: { type: String, default: null },
//     license_document: { type: String, required: true },

//     /* Optional */
//     service_fee: { type: Number, default: null },
//     bio: { type: String, maxlength: 500, default: null },

//     /* System */
//     verified: {
//       type: String,
//       enum: ["Pending", "Verified", "Rejected"],
//       default: "Pending",
//     },

//     verification_notes: { type: String, default: null },

//     is_active: { type: Boolean, default: true },
//   },
//   {
//     timestamps: true,
//     collection: "doctor_master",
//   }
// );

// /* Prevent model overwrite in dev */
// const DoctorMaster: Model<IDoctor> =
//   mongoose.models.DoctorMaster ||
//   mongoose.model<IDoctor>("DoctorMaster", DoctorSchema);

// export default DoctorMaster;




/* ================= TYPES ================= */
/*
import mongoose, { Schema, Document } from "mongoose";

export interface IDoctor extends Document {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  aadhaar: string;
  password: string;

  medical_registration_number: string;
  registration_council: string;
  qualifications: string;
  specialty: string;
  years_experience?: number;

  clinic_id?: string;

  address: {
    country: string;
    state: string;
    district: string;
    city: string;
  };

  profile_photo?: string;
  license_document: string;

  service_fee?: number;
  bio?: string;

  is_active: boolean;
  verified: "Pending" | "Verified" | "Rejected";
  verification_notes?: string;

  created_at: Date;
  updated_at: Date;
}



const DoctorSchema = new Schema<IDoctor>(
  {
   
    first_name: {
      type: String,
      required: [true, "First name is required"],
      trim: true,
    },
    last_name: {
      type: String,
      required: [true, "Last name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    phone: {
      type: String,
      required: [true, "Phone is required"],
      unique: true,
      trim: true,
    },
    aadhaar: {
      type: String,
      required: [true, "Aadhaar is required"],
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },

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
    specialty: {
      type: String,
      required: [true, "Specialty is required"],
      trim: true,
    },
    years_experience: {
      type: Number,
      min: 0,
    },

 
    clinic_id: {
      type: String,
      trim: true,
    },

    
    address: {
      country: {
        type: String,
        required: [true, "Country is required"],
      },
      state: {
        type: String,
        required: [true, "State is required"],
      },
      district: {
        type: String,
        required: [true, "District is required"],
      },
      city: {
        type: String,
        required: [true, "City is required"],
      },
    },

    profile_photo: {
      type: String,
    },
    license_document: {
      type: String,
      required: [true, "License document is required"],
    },


    service_fee: {
      type: Number,
      min: 0,
    },
    bio: {
      type: String,
      maxlength: 500,
    },

    is_active: {
      type: Boolean,
      default: true,
    },
    verified: {
      type: String,
      enum: ["Pending", "Verified", "Rejected"],
      default: "Pending",
    },
    verification_notes: {
      type: String,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const DoctorMaster =
  mongoose.models.DoctorMaster ||
  mongoose.model<IDoctor>("DoctorMaster", DoctorSchema);

export default DoctorMaster;

*/

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
  address?: IDoctorAddress;
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
    aadhaar: { type: String, trim: true, unique: true, sparse: true },
    password: { type: String, required: true },
    preferred_language: { type: Schema.Types.ObjectId, ref: "LanguageMaster" },
    specialty: { type: Schema.Types.ObjectId, ref: "SpecialtiesMaster" },
    address: { type: DoctorAddressSchema },
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
  },
  {
    timestamps: true,
    collection: "doctors",
  }
);

// indexes: (some are already declared above with unique/index)
// doctorMasterSchema.index({ email: 1 }, { unique: true, sparse: true });
// doctorMasterSchema.index({ phone: 1 }, { unique: true });
// doctorMasterSchema.index({ aadhaar: 1 }, { unique: true, sparse: true });

export default mongoose.models.DoctorMaster ||
  mongoose.model<IDoctorMaster>("DoctorMaster", DoctorMasterSchema);