"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { headerData } from "@/constants";

const HeaderMenu = () => {
  const pathname = usePathname();

  return (
    <div className="hidden md:inline-flex w-1/3 items-center gap-5 text-sm capitalize font-semibold">
      {headerData.map((item) => (
        <Link 
          key={item.title}
          href={item.href} 
          className={`
            hover:text-whitegold 
            hoverEffect 
            relative 
            group 
            ${pathname === item.href && "text-whitegold"}
          `}
        >
          {item.title}
          <span className={`
            absolute -bottom-0.5 left-1/2 w-0 h-0.5 
            text-whitegold hoverEffect 
            group-hover:w-1/2 group-hover:left-0 
            ${pathname === item.href && "w-1/2"}
          `} />
          <span className={`
            absolute -bottom-0.5 right-1/2 w-0 h-0.5 
            text-whitegold hoverEffect 
            group-hover:w-1/2 group-hover:right-0 
            ${pathname === item.href && "w-1/2"}
          `} />
        </Link>
      ))}
    </div>
  );
};

export default HeaderMenu;