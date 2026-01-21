import { connect } from "@/lib/dbConnect";
import FeedbackForm from "@/components/forms/FeedbackForm";
import React from "react";
import { postFeedbacks } from "@/actions/server/feedback";

const AddFeedback = () => {
  return (
    <div className="">
      <h2 className="text-center text-2xl py-3"> add feedback</h2>
      <FeedbackForm postFeedbacks={postFeedbacks} />
    </div>
  );
};

export default AddFeedback;
