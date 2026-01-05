"use client";

import Link from "next/link";
import CartButton from "../buttons/CartButton";

export default function FoodCard({ food }) {
  //   console.log(food);
  const { title, foodImg, price, category, id } = food;

  return (
    <div className="bg-white dark:bg-stone-900 rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col">
      {/* Image */}
      <div className="relative">
        <img src={foodImg} alt={title} className=" h-48 w-full p-2" />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="text-lg font-bold text-stone-800 dark:text-stone-100">
          {title}
        </h3>

        <p className="text-sm text-stone-500 dark:text-stone-400">
          Category: {category}
        </p>

        <p className="text-xl font-semibold text-emerald-600">৳ {price}</p>

        {/* Buttons */}
        <div className="mt-auto flex  justify-between gap-3">
          <CartButton food={food}></CartButton>

          <Link
            href={`/foods/${id}`}
            className="flex-1 border border-stone-300 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-800 py-2 rounded-xl font-medium transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
