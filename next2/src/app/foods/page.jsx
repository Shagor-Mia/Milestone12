import FoodCard from "@/components/cards/FoodCard";
import React from "react";
import { resolve } from "styled-jsx/css";
import CartItems from "./CartItems";
import InputSearch from "@/components/InputSearch";

const getFoods = async (search) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`,
    { next: { revalidate: 10 } }
  );
  const data = await res.json();
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return data.foods || [];
};

export const metadata = {
  title: "All foods",
  description: "all fast food",
};

const FoodPage = async ({ searchParams }) => {
  const { search = "" } = await searchParams;
  // console.log(search);
  const foods = await getFoods(search);
  return (
    <div className="px-5">
      <h2 className="text-4xl font-bold">food items:{foods.length}</h2>
      <div className="">
        <InputSearch />
      </div>
      <div className="flex gap-5">
        <div className="grid grid-cols-3 my-5 gap-5">
          {foods.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>
        <div className="w-[250px] border-2 rounded-xl p-4">
          <h2 className="text-2xl font-bold">Cart Items</h2>
          <hr />
          <CartItems />
        </div>
      </div>
    </div>
  );
};

export default FoodPage;
