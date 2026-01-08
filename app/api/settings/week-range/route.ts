import { connectMongo } from "@/lib/mongoose";
import WeekRangeMaster from "@/models/WeekRangeMaster";
import { success, error } from "@/lib/response";

export async function POST(req: Request) {
  try {
    await connectMongo();
    const body = await req.json();

    const start_week = Number(body.start_week);
    const end_week = Number(body.end_week);

    if (isNaN(start_week) || isNaN(end_week)) {
      return error("Invalid week values");
    }

    const payload = {
      title: body.title?.trim(),
      start_week,
      end_week,
      start_day: start_week * 7,
      end_day: end_week * 7,
    };

    const doc = await WeekRangeMaster.create(payload);
    return success(doc, "Week range added");
  } catch (err: any) {
    return error(err.message || "Failed to add week range");
  }
}

export async function GET() {
  try {
    await connectMongo();
    const list = await WeekRangeMaster.find().sort({ start_week: 1 });
    return success("Week ranges fetched", list);
  } catch (err) {
    return error("Failed to fetch week ranges");
  }
}
