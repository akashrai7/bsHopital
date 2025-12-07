// /models/RefreshToken.ts
import mongoose, { Schema, Document } from "mongoose";

export interface IRefreshToken extends Document {
  user: mongoose.Types.ObjectId;
  tokenHash: string;
  revoked: boolean;
  replacedBy?: string | null;
  createdAt: Date;
  expiresAt: Date;
  ip?: string | null;
  userAgent?: string | null;
}

const RefreshTokenSchema = new Schema<IRefreshToken>(
  {
    user: { type: Schema.Types.ObjectId, ref: "Admin", required: true },
    tokenHash: { type: String, required: true, index: true },
    revoked: { type: Boolean, default: false },
    replacedBy: { type: String, default: null },
    ip: { type: String, default: null },
    userAgent: { type: String, default: null },
    // NOTE: do NOT set index: true here to avoid duplication with TTL index below
    expiresAt: { type: Date, required: true },
  },
  { timestamps: true }
);

// TTL index: automatically remove expired tokens
RefreshTokenSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

export default mongoose.models.RefreshToken ||
  mongoose.model<IRefreshToken>("RefreshToken", RefreshTokenSchema);
