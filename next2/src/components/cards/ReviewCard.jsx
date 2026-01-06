"use client";

import { useState } from "react";
import Image from "next/image";

export default function ReviewCard({ reviews }) {
  const { user, photo, rating, review, likes, date } = reviews;

  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes.length);

  const toggleLike = () => {
    setLiked((prev) => !prev);
    setLikeCount((count) => (liked ? count - 1 : count + 1));
  };

  return (
    <div className="bg-white dark:bg-stone-900 rounded-2xl shadow-md p-5 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Image
          src={photo}
          alt={user}
          width={48}
          height={48}
          className="rounded-full "
        />

        <div className="flex-1">
          <h4 className="font-semibold text-lg">{user}</h4>
          <p className="text-sm text-stone-500">
            {new Date(date).toLocaleDateString()}
          </p>
        </div>

        {/* Rating */}
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className={i < rating ? "text-yellow-400" : "text-stone-300"}
            >
              ★
            </span>
          ))}
        </div>
      </div>

      {/* Review text */}
      <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
        {review}
      </p>

      {/* Footer */}
      <div className="flex items-center gap-3">
        <button
          onClick={toggleLike}
          className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium transition
            ${
              liked
                ? "bg-emerald-600 text-white"
                : "bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300"
            }`}
        >
          ❤️ Like
        </button>

        <span className="text-sm text-stone-500">
          {likeCount} {likeCount === 1 ? "like" : "likes"}
        </span>
      </div>
    </div>
  );
}
