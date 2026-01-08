"use client";

import React from "react";

const FeedbackCard = ({ feedback, onUpdate, onDelete }) => {
  const { _id, message, date } = feedback;

  return (
    <div className="max-w-md rounded-xl border bg-white p-4 shadow-sm">
      <p className="text-sm text-gray-500">{new Date(date).toLocaleString()}</p>

      <p className="mt-2 text-gray-800">{message}</p>

      <div className="mt-4 flex gap-3">
        <button
          onClick={() => onUpdate(_id)}
          className="rounded-lg bg-blue-600 px-4 py-1.5 text-sm text-white hover:bg-blue-700"
        >
          Update
        </button>

        <button
          onClick={() => onDelete(_id)}
          className="rounded-lg bg-red-600 px-4 py-1.5 text-sm text-white hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default FeedbackCard;
