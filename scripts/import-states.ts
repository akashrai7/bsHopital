// import fs from "fs";
// import mongoose from "mongoose";
// import dotenv from "dotenv";

// import CountryMaster from "../models/CountryMaster";
// import StateMaster from "../models/StateMaster";

// dotenv.config({ path: ".env.local" });

// const normalize = (v?: string) =>
//   v?.toLowerCase().replace(/\s+/g, " ").trim() || "";

// /* 🔑 Generate state code from name */
// const generateStateCode = (name: string) =>
//   name
//     .split(" ")
//     .map(w => w[0])
//     .join("")
//     .toUpperCase()
//     .slice(0, 3);

// async function importStates() {
//   console.log("🚀 Importing states...");

//   await mongoose.connect(process.env.MONGO_URI!);

//   const country = await CountryMaster.findOne({ code: "IN" });
//   if (!country) throw new Error("India not found");

//   const raw = fs.readFileSync("scripts/data/pincode.json", "utf-8");
//   const json = JSON.parse(raw);
//   const records = json.records;

//   const stateMap = new Map<string, string>();

//   records.forEach((r: any) => {
//     if (!r.statename) return;
//     const name = normalize(r.statename);
//     if (!stateMap.has(name)) {
//       stateMap.set(name, generateStateCode(name));
//     }
//   });

//   const states = [...stateMap.entries()].map(([name, code]) => ({
//     country: country._id,
//     name,
//     code,
//   }));

//   await StateMaster.insertMany(states, { ordered: false });

//   console.log("✅ States imported:", states.length);
//   process.exit(0);
// }

// importStates().catch(err => {
//   console.error("❌ State import failed:", err.message);
//   process.exit(1);
// });

import fs from "fs";
import mongoose from "mongoose";
import dotenv from "dotenv";

import CountryMaster from "../models/CountryMaster";
import StateMaster from "../models/StateMaster";

dotenv.config({ path: ".env.local" });

/* 🔑 Official / stable state codes */
const STATE_CODE_MAP: Record<string, string> = {
  "andhra pradesh": "AP",
  "arunachal pradesh": "AR",
  "assam": "AS",
  "bihar": "BR",
  "chhattisgarh": "CG",
  "goa": "GA",
  "gujarat": "GJ",
  "haryana": "HR",
  "himachal pradesh": "HP",
  "jharkhand": "JH",
  "karnataka": "KA",
  "kerala": "KL",
  "madhya pradesh": "MP",
  "maharashtra": "MH",
  "manipur": "MN",
  "meghalaya": "ML",
  "mizoram": "MZ",
  "nagaland": "NL",
  "odisha": "OD",
  "punjab": "PB",
  "rajasthan": "RJ",
  "sikkim": "SK",
  "tamil nadu": "TN",
  "telangana": "TS",
  "tripura": "TR",
  "uttar pradesh": "UP",
  "uttarakhand": "UK",
  "west bengal": "WB",
  "andaman and nicobar islands": "AN",
  "chandigarh": "CH",
  "dadra and nagar haveli and daman and diu": "DN",
  "delhi": "DL",
  "jammu and kashmir": "JK",
  "ladakh": "LA",
  "lakshadweep": "LD",
  "puducherry": "PY"
};

const normalize = (v?: string) =>
  v?.toLowerCase().replace(/\s+/g, " ").trim() || "";

async function importStates() {
  console.log("🚀 Importing states...");

  await mongoose.connect(process.env.MONGO_URI!);

  const country = await CountryMaster.findOne({ code: "IN" });
  if (!country) throw new Error("India not found");

  const raw = fs.readFileSync("scripts/data/pincode.json", "utf-8");
  const json = JSON.parse(raw);
  const records = json.records;

  const stateSet = new Set<string>();
  records.forEach((r: any) => {
    if (r.statename) stateSet.add(normalize(r.statename));
  });

  const ops = [];

  for (const name of stateSet) {
    const code = STATE_CODE_MAP[name];

    if (!code) {
      console.log("⚠️ Code missing for state:", name);
      continue;
    }

    ops.push({
      updateOne: {
        filter: { country: country._id, code },
        update: {
          $setOnInsert: {
            country: country._id,
            name,
            code,
          },
        },
        upsert: true, // 🔥 duplicate-safe
      },
    });
  }

  await StateMaster.bulkWrite(ops, { ordered: false });

  console.log("✅ States imported:", ops.length);
  process.exit(0);
}

importStates().catch(err => {
  console.error("❌ State import failed:", err.message);
  process.exit(1);
});


// $ npx ts-node -P tsconfig.scripts.json scripts/import-states.ts
