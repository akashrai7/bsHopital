// /models/RelationshipTypeMaster.ts
import mongoose, { Schema, Document } from "mongoose";

export interface IRelationshipTypeMaster extends Document {
  code: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

const RelationshipTypeMasterSchema = new Schema<IRelationshipTypeMaster>(
  {
    code: {
      type: String,
      required: true,
      trim: true,
      uppercase: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
    collection: "relationship_type_master", // जैसा आपने नाम बोला
  }
);

// ensure unique index on code
RelationshipTypeMasterSchema.index({ code: 1 }, { unique: true });

export default mongoose.models.RelationshipTypeMaster ||
  mongoose.model<IRelationshipTypeMaster>(
    "RelationshipTypeMaster",
    RelationshipTypeMasterSchema
  );
