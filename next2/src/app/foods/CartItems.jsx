"use client";

import { CartContext } from "@/context/CartProvider";
import React, { use } from "react";

const CartItems = () => {
  const { cart } = use(CartContext);
  console.log(cart);
  return <div>{cart.length} items Added.</div>;
};

export default CartItems;
