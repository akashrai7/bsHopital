// import fs from "fs";
// import mongoose from "mongoose";

// import CountryMaster from "../models/CountryMaster";
// import StateMaster from "../models/StateMaster";
// import DistrictMaster from "../models/DistrictMaster";
// import PincodeMaster from "../models/PincodeMaster";
// import dotenv from "dotenv";
// dotenv.config({ path: ".env.local" });


// const FILE_PATH = "scripts/data/pincode.json";
// const BATCH_SIZE = 1000;

// async function importPincodeMaster() {
//   console.log("🚀 Starting PincodeMaster import...");

//   if (!process.env.MONGO_URI) {
//     throw new Error("❌ MONGO_URI not found in environment");
//   }

//   await mongoose.connect(process.env.MONGO_URI!);

//   const normalize = (v: string) =>
//   v
//     ?.toLowerCase()
//     .replace(/\s+/g, " ")
//     .trim();

//   /* ================= COUNTRY ================= */
//   const country = await CountryMaster.findOne({ code: "IN" });
//   if (!country) throw new Error("❌ Country India not found");

//   /* ================= STATES ================= */
//   const states = await StateMaster.find({ country: country._id });
//   const stateMap = new Map(
//     states.map(s => [s.name.toUpperCase().trim(), s._id])
//   );

//   /* ================= DISTRICTS ================= */
//   const districts = await DistrictMaster.find({ country: country._id });
//   const districtMap = new Map(
//     districts.map(d => [
//       `${d.state.toString()}_${d.name.toUpperCase().trim()}`,
//       d._id,
//     ])
//   );

//   /* ================= READ FILE ================= */
// const raw = fs.readFileSync(FILE_PATH, "utf-8");
// const json = JSON.parse(raw);

// const records = Array.isArray(json) ? json : json.records;

// if (!Array.isArray(records)) {
//   throw new Error("❌ JSON records array not found");
// }

// console.log(`📄 Total records in JSON: ${records.length}`);


//   let bulkOps = [];
//   let inserted = 0;
//   let skipped = 0;

//   for (let i = 0; i < records.length; i++) {
//     const r = records[i];

//     const stateId = stateMap.get(r.statename?.toUpperCase()?.trim());
//     if (!stateId) {
//       skipped++;
//       continue;
//     }

//     const districtId = districtMap.get(
//       `${stateId}_${r.district?.toUpperCase()?.trim()}`
//     );
//     if (!districtId) {
//       skipped++;
//       continue;
//     }

//     bulkOps.push({
//       updateOne: {
//         filter: {
//           pincode: r.pincode,
//           officename: r.officename,
//           state: stateId,
//         },
//         update: {
//           $setOnInsert: {
//             country: country._id,
//             state: stateId,
//             district: districtId,
//             pincode: r.pincode,
//             circlename: r.circlename,
//             regionname: r.regionname,
//             divisionname: r.divisionname,
//             officename: r.officename,
//             officetype: r.officetype,
//             delivery: r.delivery,
//             location: {
//               lat: Number(r.latitude) || null,
//               lng: Number(r.longitude) || null,
//             },
//           },
//         },
//         upsert: true, // ✅ resume-safe
//       },
//     });

//     if (bulkOps.length >= BATCH_SIZE) {
//       const res = await PincodeMaster.bulkWrite(bulkOps, {
//         ordered: false,
//       });

//       inserted += res.upsertedCount || 0;
//       bulkOps = [];

//       if (i % 5000 === 0) {
//         console.log(`⏳ Processed ${i}/${records.length}`);
//       }
//     }
//   }

//   if (bulkOps.length) {
//     const res = await PincodeMaster.bulkWrite(bulkOps, { ordered: false });
//     inserted += res.upsertedCount || 0;
//   }

//   console.log("✅ IMPORT COMPLETED");
//   console.log("➕ Inserted:", inserted);
//   console.log("⏭️ Skipped:", skipped);

//   process.exit(0);
// }

// importPincodeMaster().catch(err => {
//   console.error("❌ Import failed:", err);
//   process.exit(1);
// });

import fs from "fs";
import mongoose from "mongoose";
import dotenv from "dotenv";

import CountryMaster from "../models/CountryMaster";
import StateMaster from "../models/StateMaster";
import DistrictMaster from "../models/DistrictMaster";
import PincodeMaster from "../models/PincodeMaster";

dotenv.config({ path: ".env.local" });

const FILE_PATH = "scripts/data/pincode.json";
const BATCH_SIZE = 1000;

const normalize = (v?: string) =>
  v?.toLowerCase().replace(/\s+/g, " ").trim() || "";

async function importPincodeMaster() {
  console.log("🚀 Starting PincodeMaster import...");

  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI not found");
  }

  await mongoose.connect(process.env.MONGO_URI);

  const country = await CountryMaster.findOne({ code: "IN" });
  if (!country) throw new Error("India not found");

  /* ================= STATES ================= */
  const states = await StateMaster.find({ country: country._id });
  const stateMap = new Map(
    states.map(s => [normalize(s.name), s._id])
  );

  /* ================= DISTRICTS ================= */
  const districts = await DistrictMaster.find({});
  const districtMap = new Map(
    districts.map(d => [
      `${d.state.toString()}_${normalize(d.name)}`,
      d._id,
    ])
  );

  /* ================= READ FILE ================= */
  const raw = fs.readFileSync(FILE_PATH, "utf-8");
  const json = JSON.parse(raw);
  const records = Array.isArray(json) ? json : json.records;

  console.log(`📄 Total records: ${records.length}`);

  let bulkOps: any[] = [];
  let inserted = 0;
  let skipped = 0;

  for (const r of records) {
    const stateKey = normalize(r.statename);
    const districtKey = normalize(r.district);

    const stateId = stateMap.get(stateKey);
    if (!stateId) {
      skipped++;
      continue;
    }

    const districtId = districtMap.get(
      `${stateId}_${districtKey}`
    );
    if (!districtId) {
      skipped++;
      continue;
    }

    bulkOps.push({
      updateOne: {
        filter: {
          pincode: r.pincode,
          officename: r.officename,
          state: stateId,
        },
        update: {
          $setOnInsert: {
            country: country._id,
            state: stateId,
            district: districtId,
            pincode: r.pincode,
            officename: r.officename,
            officetype: r.officetype,
            delivery: r.delivery,
            circlename: r.circlename,
            regionname: r.regionname,
            divisionname: r.divisionname,
            location: {
              lat: Number(r.latitude) || null,
              lng: Number(r.longitude) || null,
            },
          },
        },
        upsert: true,
      },
    });

    if (bulkOps.length >= BATCH_SIZE) {
      const res = await PincodeMaster.bulkWrite(bulkOps, {
        ordered: false,
      });
      inserted += res.upsertedCount || 0;
      bulkOps = [];
    }
  }

  if (bulkOps.length) {
    const res = await PincodeMaster.bulkWrite(bulkOps, { ordered: false });
    inserted += res.upsertedCount || 0;
  }

  console.log("✅ IMPORT DONE");
  console.log("Inserted:", inserted);
  console.log("Skipped:", skipped);

  process.exit(0);
}

importPincodeMaster().catch(err => {
  console.error("❌ Import failed:", err);
  process.exit(1);
});

// npx ts-node -P tsconfig.scripts.json scripts/import-pincode-master.ts
