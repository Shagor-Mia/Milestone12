import FoodCardSkeleton from "@/components/skeletons/FoodCardSkeleton";
import React from "react";

const loading = () => {
  return (
    <div className="grid grid-cols-3 my-5 gap-5">
      {[...Array(12)].map((_, index) => (
        <FoodCardSkeleton key={index} />
      ))}
    </div>
  );
};

export default loading;
