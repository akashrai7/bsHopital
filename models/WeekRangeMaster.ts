import mongoose, { Schema, models, model } from "mongoose";

const WeekRangeSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    start_week: {
      type: Number,
      required: true,
      min: 0,
    },
    end_week: {
      type: Number,
      required: true,
      min: 0,
    },
    start_day: {
      type: Number,
      required: true,
    },
    end_day: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  { timestamps: true }
);

// safety: start_week <= end_week
WeekRangeSchema.pre("validate", function () {
  if (this.start_week > this.end_week) {
    throw new Error("Start week cannot be greater than end week");
  }
});

export default models.WeekRangeMaster ||
  model("WeekRangeMaster", WeekRangeSchema);
