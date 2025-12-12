import mongoose, { Schema, Document } from "mongoose";

export interface ILanguageMaster extends Document {
  code: string;
  name: string;
  is_active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const LanguageMasterSchema = new Schema<ILanguageMaster>(
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
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true, collection: "language_master" }
);

export default mongoose.models.LanguageMaster ||
  mongoose.model<ILanguageMaster>("LanguageMaster", LanguageMasterSchema);
