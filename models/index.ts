// models/index.ts
// Import every model so their registration (mongoose.model) runs.
// Keep the list deterministic and complete.
import "./CountryMaster";
import "./StateMaster";
import "./DistrictMaster";
import "./LanguageMaster";
import "./RelationshipTypeMaster";
import "./ParentMaster";
import "./SpecialtiesMaster";
import "./WeekRangeMaster";
import "./DoseTypeMaster";
import "./VaccineSiteMaster";
// ... add other master models you have
// No export needed — we just want side-effectful imports