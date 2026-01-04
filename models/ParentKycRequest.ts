// models/ParentKycRequest.ts
import mongoose from "mongoose";

const ParentKycRequestSchema = new mongoose.Schema(
  {
    parentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ParentMaster",
      required: true
    },

    provider: {
      type: String,
      default: "quickekyc"
    },

    level: {
      type: String,
      enum: ["aadhaar_validation", "otp"],
      required: true
    },

    requestId: {
      type: Number // quickekyc request_id
    },

    aadhaarMasked: String,

    status: {
      type: String,
      enum: ["initiated", "otp_sent", "verified", "failed", "expired"],
      default: "initiated"
    },

    responseRaw: {
      type: Object // FULL RESPONSE JSON
    },

    errorMessage: String
  },
  { timestamps: true }
);

export default mongoose.models.ParentKycRequest ||
  mongoose.model("ParentKycRequest", ParentKycRequestSchema);
