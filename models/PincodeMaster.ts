import mongoose, { Schema, Document, Model } from "mongoose";

export interface IPincodeMaster extends Document {
  country: mongoose.Types.ObjectId;
  state: mongoose.Types.ObjectId;
  district: mongoose.Types.ObjectId;

  pincode: string;

  circlename?: string;
  regionname?: string;
  divisionname?: string;
  officename?: string;
  officetype?: string;
  delivery?: string;

  location?: {
    lat?: number | null;
    lng?: number | null;
  };

  createdAt?: Date;
  updatedAt?: Date;
}

const PincodeMasterSchema: Schema<IPincodeMaster> = new Schema(
  {
    country: {
      type: Schema.Types.ObjectId,
      ref: "CountryMaster",
      required: true,
      index: true,
    },

    state: {
      type: Schema.Types.ObjectId,
      ref: "StateMaster",
      required: true,
      index: true,
    },

    district: {
      type: Schema.Types.ObjectId,
      ref: "DistrictMaster",
      required: true,
      index: true,
    },

    pincode: {
      type: String,
      required: true,
      index: true,
      trim: true,
    },

    circlename: {
      type: String,
      trim: true,
    },

    regionname: {
      type: String,
      trim: true,
    },

    divisionname: {
      type: String,
      trim: true,
    },

    officename: {
      type: String,
      trim: true,
    },

    officetype: {
      type: String,
      trim: true,
    },

    delivery: {
      type: String,
      trim: true,
    },

    location: {
      lat: {
        type: Number,
        default: null,
      },
      lng: {
        type: Number,
        default: null,
      },
    },
  },
  {
    timestamps: true,
    collection: "pincode_master",
  }
);

/* 🔥 Compound Indexes (Fast queries ke liye) */
PincodeMasterSchema.index({ pincode: 1, officename: 1 });
PincodeMasterSchema.index({ state: 1, district: 1 });

const PincodeMaster: Model<IPincodeMaster> =
  mongoose.models.PincodeMaster ||
  mongoose.model<IPincodeMaster>("PincodeMaster", PincodeMasterSchema);

export default PincodeMaster;
