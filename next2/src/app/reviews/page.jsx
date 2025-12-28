"use client";

import ReviewCard from "@/components/cards/ReviewCard";
import React, { useEffect, useState } from "react";
import ReviewLoading from "./ReviewLoading";

const ReviewPage = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://taxi-kitchen-api.vercel.app/api/v1/reviews`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.reviews || []);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <ReviewLoading />;
  }
  return (
    <div>
      <h2 className="text-4xl font-bold">total review:{reviews.length}</h2>
      <div className="grid grid-cols-3 my-5 gap-5">
        {reviews.map((review) => (
          <ReviewCard key={review.id} reviews={review} />
        ))}
      </div>
    </div>
  );
};

export default ReviewPage;
