// import fs from "fs";
// import mongoose from "mongoose";
// import dotenv from "dotenv";

// import CountryMaster from "../models/CountryMaster";
// import StateMaster from "../models/StateMaster";
// import DistrictMaster from "../models/DistrictMaster";

// dotenv.config({ path: ".env.local" });

// const normalize = (v?: string) =>
//   v?.toLowerCase().replace(/\s+/g, " ").trim() || "";

// async function importDistricts() {
//   await mongoose.connect(process.env.MONGO_URI!);

//   const country = await CountryMaster.findOne({ code: "IN" });
//   const states = await StateMaster.find({ country: country!._id });

//   const stateMap = new Map(
//     states.map(s => [normalize(s.name), s._id])
//   );

//   const raw = fs.readFileSync("scripts/data/pincode.json", "utf-8");
//   const json = JSON.parse(raw);
//   const records = json.records;

//   const districtSet = new Set<string>();
//   records.forEach((r: any) => {
//     if (r.statename && r.district) {
//       districtSet.add(
//         `${normalize(r.statename)}__${normalize(r.district)}`
//       );
//     }
//   });

//   const districts = [...districtSet].map(key => {
//     const [stateName, districtName] = key.split("__");
//     return {
//       country: country!._id,
//       state: stateMap.get(stateName),
//       name: districtName,
//     };
//   }).filter(d => d.state);

//   await DistrictMaster.insertMany(districts, { ordered: false });

//   console.log("✅ Districts imported:", districts.length);
//   process.exit(0);
// }

// importDistricts();

import fs from "fs";
import mongoose from "mongoose";
import dotenv from "dotenv";

import CountryMaster from "../models/CountryMaster";
import StateMaster from "../models/StateMaster";
import DistrictMaster from "../models/DistrictMaster";

dotenv.config({ path: ".env.local" });

const FILE_PATH = "scripts/data/pincode.json";

const normalize = (v?: string) =>
  v?.toLowerCase().replace(/\s+/g, " ").trim() || "";

async function importDistricts() {
  console.log("🚀 Importing districts...");

  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI not found");
  }

  await mongoose.connect(process.env.MONGO_URI);

  /* ================= COUNTRY ================= */
  const country = await CountryMaster.findOne({ code: "IN" });
  if (!country) throw new Error("India not found");

  /* ================= STATES ================= */
  const states = await StateMaster.find({ country: country._id });
  const stateMap = new Map(
    states.map(s => [normalize(s.name), s])
  );

  /* ================= READ JSON ================= */
  const raw = fs.readFileSync(FILE_PATH, "utf-8");
  const json = JSON.parse(raw);
  const records = json.records;

  // stateName -> Set of district names
  const stateDistrictMap = new Map<string, Set<string>>();

  for (const r of records) {
    if (!r.statename || !r.district) continue;

    const stateName = normalize(r.statename);
    const districtName = normalize(r.district);

    if (!stateDistrictMap.has(stateName)) {
      stateDistrictMap.set(stateName, new Set());
    }

    stateDistrictMap.get(stateName)!.add(districtName);
  }

  const ops: any[] = [];

  for (const [stateName, districtSet] of stateDistrictMap.entries()) {
    const state = stateMap.get(stateName);
    if (!state) {
      console.log("⚠️ State not found for districts:", stateName);
      continue;
    }

    let counter = 1;

    for (const districtName of districtSet) {
      const code = String(counter).padStart(3, "0"); // 001, 002…

      ops.push({
        updateOne: {
          filter: {
            state: state._id,
            name: districtName,
          },
          update: {
            $setOnInsert: {
              country: country._id,
              state: state._id,
              name: districtName,
              code,
            },
          },
          upsert: true, // resume-safe
        },
      });

      counter++;
    }
  }

  await DistrictMaster.bulkWrite(ops, { ordered: false });

  console.log("✅ Districts imported:", ops.length);
  process.exit(0);
}

importDistricts().catch(err => {
  console.error("❌ District import failed:", err);
  process.exit(1);
});


// npx ts-node -P tsconfig.scripts.json scripts/import-districts.ts
