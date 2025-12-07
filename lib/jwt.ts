// /lib/jwt.ts
import jwt from "jsonwebtoken";

const ACCESS_SECRET = process.env.JWT_ACCESS_SECRET;
const REFRESH_SECRET = process.env.JWT_REFRESH_SECRET;

if (!ACCESS_SECRET) throw new Error("JWT_ACCESS_SECRET is missing in .env");
if (!REFRESH_SECRET) throw new Error("JWT_REFRESH_SECRET is missing in .env");

export function signAccessToken(payload: object) {
  return jwt.sign(payload, ACCESS_SECRET, {
    expiresIn: "15m",
  });
}

export function signRefreshToken(payload: object) {
  return jwt.sign(payload, REFRESH_SECRET, {
    expiresIn: "7d",
  });
}

export function verifyAccessToken(token: string) {
  try {
    return jwt.verify(token, ACCESS_SECRET);
  } catch (err) {
    return null;
  }
}

export function verifyRefreshToken(token: string) {
  try {
    return jwt.verify(token, REFRESH_SECRET);
  } catch (err) {
    return null;
  }
}
