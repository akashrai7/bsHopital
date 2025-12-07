// /lib/refreshToken.ts
import crypto from "crypto";
import RefreshToken from "@/models/RefreshToken";
import mongoose from "mongoose";

export function generateRefreshTokenString() {
  return crypto.randomBytes(64).toString("hex"); // 128 hex chars ~ 512 bits
}

export function hashToken(token: string) {
  return crypto.createHash("sha256").update(token).digest("hex");
}

/**
 * Create & store a refresh token record for user
 * returns { raw, expiresAt } where raw is token string to send in cookie
 */
export async function createRefreshTokenForUser(userId: mongoose.Types.ObjectId | string, opts?: { ip?: string, userAgent?: string }) {
  const raw = generateRefreshTokenString();
  const tokenHash = hashToken(raw);
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

  const doc = await RefreshToken.create({
    user: userId,
    tokenHash,
    expiresAt,
    ip: opts?.ip || null,
    userAgent: opts?.userAgent || null,
  });

  return { raw, expiresAt, id: doc._id.toString() };
}

/**
 * Verify a raw refresh token string:
 * - finds DB token by hash
 * - returns the token doc if valid (not revoked & not expired)
 */
export async function findValidRefreshTokenByRaw(rawToken: string) {
  if (!rawToken) return null;
  const tokenHash = hashToken(rawToken);
  const doc = await RefreshToken.findOne({ tokenHash }).populate("user");
  if (!doc) return null;
  if (doc.revoked) return null;
  if (doc.expiresAt.getTime() <= Date.now()) return null;
  return doc;
}

/**
 * Revoke a token (mark revoked + optional replacedBy)
 */
export async function revokeRefreshToken(docId: string | mongoose.Types.ObjectId, replacedByTokenId: string | null = null) {
  await RefreshToken.findByIdAndUpdate(docId, { revoked: true, replacedBy: replacedByTokenId }, { new: true });
}

/**
 * Revoke all tokens for a user (logout-all)
 */
export async function revokeAllTokensForUser(userId: string | mongoose.Types.ObjectId) {
  await RefreshToken.updateMany({ user: userId, revoked: false }, { revoked: true });
}
