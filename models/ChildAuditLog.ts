import mongoose, { Schema, Types, model, models } from "mongoose";

export interface IChildAuditLog {
  child_id: Types.ObjectId;
  action: "CREATE" | "UPDATE" | "DELETE";
  changed_by: Types.ObjectId;
  changed_by_role: string;
  changes: Record<
    string,
    {
      old: any;
      new: any;
    }
  >;
  ip?: string;
  user_agent?: string;
  createdAt?: Date;
}

const ChildAuditLogSchema = new Schema<IChildAuditLog>(
  {
    child_id: {
      type: Schema.Types.ObjectId,
      ref: "ChildMaster",
      required: true,
      index: true,
    },

    action: {
      type: String,
      enum: ["CREATE", "UPDATE", "DELETE"],
      required: true,
    },

    changed_by: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    changed_by_role: {
      type: String,
      required: true,
    },

    changes: {
      type: Schema.Types.Mixed,
      required: true,
    },

    ip: String,
    user_agent: String,
  },
  {
    timestamps: true,
    collection: "child_audit_logs",
  }
);

const ChildAuditLog =
  models.ChildAuditLog ||
  model<IChildAuditLog>("ChildAuditLog", ChildAuditLogSchema);

export default ChildAuditLog;
