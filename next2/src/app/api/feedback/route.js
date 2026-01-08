import { connect } from "@/app/lib/dbConnect";
import { feedback } from "../route";
import { revalidatePath } from "next/cache";

const feedbackCollection = connect("feedbacks");

export async function GET(request) {
  const result = await feedbackCollection.find().toArray();
  return Response.json(result);
}

export async function POST(request) {
  const { message } = await request.json();

  if (!message || typeof message != "string") {
    return Response.json({
      status: 400,
      message: "send a message.",
    });
  }

  const newFeedBack = { message, date: new Date().toISOString() };
  const result = await feedbackCollection.insertOne(newFeedBack);
  revalidatePath("/feedback");

  return Response.json(result);
}
