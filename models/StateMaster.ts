import mongoose, { Schema, Document, Types } from "mongoose";

export interface IStateMaster extends Document {
  country: Types.ObjectId;
  code: string;
  name: string;
  is_active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const StateMasterSchema = new Schema<IStateMaster>(
  {
    country: {
      type: Schema.Types.ObjectId,
      ref: "CountryMaster", // आपका पहले वाला country model name
      required: true,
    },
    code: {
      type: String,
      required: true,
      trim: true,
      uppercase: true,
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
  {
    timestamps: true,
    collection: "state_master",
  }
);

// एक country में same code दो बार न हो
StateMasterSchema.index({ country: 1, code: 1 }, { unique: true });

export default mongoose.models.StateMaster ||
  mongoose.model<IStateMaster>("StateMaster", StateMasterSchema);