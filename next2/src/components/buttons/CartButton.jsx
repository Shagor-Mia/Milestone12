"use client";

import { CartContext } from "@/context/CartProvider";
import React, { use, useState } from "react";

const CartButton = ({ food }) => {
  const [inCart, setInCart] = useState(false);
  const { addToCart } = use(CartContext);
  const onAddToCart = () => {
    addToCart(food);
    setInCart(true);
  };
  return (
    <div>
      <button
        onClick={onAddToCart}
        disabled={inCart}
        className="flex-1  bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-xl font-medium transition disabled:bg-gray-300"
      >
        {inCart ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
};

export default CartButton;
