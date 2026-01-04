// models/ParentKycAuditLog.ts
import mongoose from "mongoose";

const ParentKycAuditLogSchema = new mongoose.Schema(
  {
    parentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ParentMaster"
    },
    action: String, // KYC_START, OTP_SENT, VERIFIED, FAILED
    performedBy: {
      type: String,
      enum: ["admin", "system"],
      default: "system"
    }
  },
  { timestamps: true }
);

export default mongoose.models.ParentKycAuditLog ||
  mongoose.model("ParentKycAuditLog", ParentKycAuditLogSchema);
