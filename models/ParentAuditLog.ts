import mongoose, { Schema, Types } from "mongoose";

export interface IParentAuditLog {
  parent_id: Types.ObjectId;
  action: "CREATE" | "UPDATE" | "DELETE";
  changes: Record<string, { old: any; new: any }>;
  actor_id?: Types.ObjectId;
  actor_role: "admin";
  ip?: string;
  createdAt: Date;
}

const ParentAuditLogSchema = new Schema<IParentAuditLog>(
  {
    parent_id: { type: Schema.Types.ObjectId, ref: "ParentMaster", required: true, index: true },
    action: { type: String, enum: ["CREATE", "UPDATE", "DELETE"], required: true },
    changes: { type: Object, default: {} },
    actor_id: { type: Schema.Types.ObjectId },
    actor_role: { type: String, default: "admin" },
    ip: { type: String },
  },
  { timestamps: true, collection: "parent_audit_logs" }
);

export default mongoose.models.ParentAuditLog ||
  mongoose.model<IParentAuditLog>("ParentAuditLog", ParentAuditLogSchema);
