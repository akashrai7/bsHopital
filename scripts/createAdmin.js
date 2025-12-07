// // scripts/createAdmin.js

// require("dotenv").config({ path: require("path").join(__dirname, "..", ".env.local") });
 
// const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
// const Admin = require("../models/Admin.ts").default || require("../models/Admin");

// const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://bsHospital:W0WnD3YQC0bYIynJ@cluster0.0ma9nlr.mongodb.net/bsHospital?retryWrites=true&w=majority";

// async function run() {
//   try {
//     await mongoose.connect(MONGO_URI);
//     console.log("✔ Connected to Mongo");

//     const email = process.env.SEED_ADMIN_EMAIL || "aharnish@gmail.com";
//     const phone = process.env.SEED_ADMIN_PHONE || "9999999999";
//     const passwordPlain = process.env.SEED_ADMIN_PASSWORD || "Admin123";

//     const existing = await Admin.findOne({ email: email.toLowerCase() });
//     if (existing) {
//       console.log("Admin already exists:", existing.email, existing._id.toString());
//       process.exit(0);
//     }

//     const hashed = await bcrypt.hash(passwordPlain, 12);
//     const admin = await Admin.create({
//       first_name: "Super",
//       last_name: "Admin",
//       email: email.toLowerCase(),
//       phone,
//       password: hashed,
//       photo: null
//     });

//     console.log("Admin created:", {
//       id: admin._id.toString(),
//       email: admin.email,
//       first_name: admin.first_name
//     });

//     process.exit(0);
//   } catch (err) {
//     console.error("Error creating admin:", err);
//     process.exit(1);
//   }
// }

// run();


// scripts/createAdmin.js
const path = require("path");

// .env.local लोड करें (project root से)
require("dotenv").config({
  path: path.join(__dirname, "..", ".env.local"),
});

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// Admin model (TS या JS दोनों cases के लिए)
const Admin = require("../models/Admin.ts").default || require("../models/Admin");

// Mongo URI - env से, नहीं तो fallback
const MONGO_URI =
  process.env.MONGO_URI ||
  "mongodb+srv://bsHospital:W0WnD3YQC0bYIynJ@cluster0.0ma9nlr.mongodb.net/bsHospital?retryWrites=true&w=majority";

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✔ Connected to Mongo");

    const email = (process.env.SEED_ADMIN_EMAIL || "aharnish@gmail.com").toLowerCase();
    const phone = process.env.SEED_ADMIN_PHONE || "9999999999";
    const passwordPlain = process.env.SEED_ADMIN_PASSWORD || "Admin123";

    const existing = await Admin.findOne({ email });
    if (existing) {
      console.log("Admin already exists:", existing.email, existing._id.toString());
      process.exit(0);
    }

    const hashed = await bcrypt.hash(passwordPlain, 12);
    const admin = await Admin.create({
      first_name: "Super",
      last_name: "Admin",
      email,
      phone,
      password: hashed,
      photo: null,
    });

    console.log("Admin created:", {
      id: admin._id.toString(),
      email: admin.email,
      first_name: admin.first_name,
    });

    process.exit(0);
  } catch (err) {
    console.error("Error creating admin:", err);
    process.exit(1);
  }
}

run();
