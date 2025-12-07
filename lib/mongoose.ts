// /lib/mongoose.ts
import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI || "";
if (!MONGO_URI) {
  throw new Error("MONGO_URI is not defined in environment variables");
}

let isConnected = false;

export async function connectMongo() {
  if (isConnected) return;

  try {
    const db = await mongoose.connect(MONGO_URI);
    isConnected = db.connections[0].readyState === 1;
   // console.log("✔ MongoDB Connected");
  } catch (error) {
  //  console.error("❌ MongoDB Connection Failed", error);
    throw new Error("MongoDB connection error");
  }
}
