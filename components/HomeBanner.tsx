import React from "react";
import Title from "./Title";

const HomeBanner = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 mt-20 py-10">
      <Title className="text-5xl text-golddark md:text-5xl text-center font-italiana tracking-tighter">
        Best Perfume Collection
      </Title>
      <p className="text-sm text-center text-[#f7e6c5da] font-medium max-w-[480px]">
      Discover the power of scent to elevate your mood and boost your confidence. Shop our curated selection of perfumes and find the perfect fragrance to make you feel your best.
      </p>
    </div>
  );
};

export default HomeBanner;