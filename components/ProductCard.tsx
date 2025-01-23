"use client"
import React from 'react';
import { Product } from '@/sanity.types';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';
import PriceView from './PriceView';
import AddToCartButton from './AddToCartButton';

const ProductCard = ({ product }: { product: Product }) => {

  return (
    <div className="group text-sm rounded-lg overflow-hidden">
      <div className=" bg-gradient-to-r from-golddark  to-[#e2c58b] overflow-hidden relative">
        {product?.images && (
          <Link href={`/product/${product?.slug?.current}`}>
            <Image
              src={urlFor(product?.images[0]).url()}
              width={500}
              height={500}
              alt="productImage"
              priority
              className={`w-full h-72 object-contain overflow-hidden hoverEffect ${product?.stock !== 0 && "group-hover:scale-105"}`}
            />
          </Link>
        )}
        {product?.stock === 0 && (
          <div className="absolute top-0 left-0 w-full h-full bg-darkColor/70 flex items-center justify-center">
            <p className="text-xl text-white font-semibold text-center">
              Out of Stock
            </p>
          </div>
        )}
      </div>
      <div className="py-3 px-2 flex flex-col gap-1.5 bg-[#111111]/60 border border-golddark border-t-0 rounded-lg rounded-tl-none rounded-tr-none">
        <h2 className="font-semibold line-clamp-1 text-xl text-golddark font-">{product?.name}</h2>
        <p className='text-[#f7e6c5da]/70 '>{product?.intro}</p>
        <PriceView
          className="text-lg"
          price={product?.price}
          discount={product?.discount}
        />
        <AddToCartButton product={product} />
      </div>
    </div>
  );
};

export default ProductCard
