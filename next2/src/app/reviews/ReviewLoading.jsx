import ReviewCardSkeleton from "@/components/skeletons/ReviewCardSkeleton";
import React from "react";

const ReviewLoading = () => {
  return (
    <div className="grid grid-cols-3 my-5 gap-5">
      {[...Array(12)].map((_, index) => (
        <ReviewCardSkeleton key={index} />
      ))}
    </div>
  );
};

export default ReviewLoading;
