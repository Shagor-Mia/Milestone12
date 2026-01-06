import React from "react";
import ReviewPage from "./ReviewPage";

export const metadata = {
  // title: "All reviews",
  title: {
    absolute: "reviews",
  },
  description: "All customer Reviews",
};
const AllReviews = () => {
  return (
    <div>
      <ReviewPage />
    </div>
  );
};

export default AllReviews;
