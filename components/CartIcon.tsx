'use client'
import useCartStore from "@/store";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";

const CartIcon = () => {
  const { items } = useCartStore()
  return (
    <Link href={"/cart"} className="group relative">
      <ShoppingCart className="w-5 h-5 text-whitegold group-hover:text-[#fcf2df79] hoverEffect" />
      <span className="absolute -top-1 -right-2 bg-[#111111] text-whitegold h-3.5 w-3.5 rounded-full text-xs font-semibold flex items-center justify-center">
        {items.length ? items.length : 0}
      </span>
    </Link>
  );
};

export default CartIcon;
