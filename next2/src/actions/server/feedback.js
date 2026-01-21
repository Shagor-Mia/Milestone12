"use server";

import { connect } from "@/lib/dbConnect";

export const postFeedbacks = async (message) => {
  const result = await connect("feedbacks").insertOne({
    message,
    date: new Date(),
  });
  return { ...result, insertedId: result.insertedId.toString() };
};

export const getFeedback = async () => {
  return await connect("feedbacks").find().toArray();
};
