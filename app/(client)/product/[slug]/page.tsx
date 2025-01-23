import AddToCartButton from '@/components/AddToCartButton';
import Container from '@/components/container'
import PriceView from '@/components/PriceView';
import ProductCharacteristics from '@/components/ProductCharacteristics';
import ImageView from '@/components/ui/ImageView';
import { getProductBySlug } from '@/sanity/helpers/queries';
import { BoxIcon, FileQuestion, Heart, ListOrderedIcon, Share } from 'lucide-react';
import { notFound } from 'next/navigation';
import React from 'react'

const SingleProductPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) {
    return notFound();
  }

  

  return (
    <Container className="py-10 flex flex-col md:flex-row gap-10 mt-10 mb-40">
      {product?.images && <ImageView images={product?.images} />}
      
      <div className="w-full md:w-1/2 flex flex-col gap-5">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-golddark">
            {product?.name}
          </h2>
          <PriceView
            price={product?.price}
            discount={product?.discount}
            className="text-2xl font-bold"
          />
        </div>
        {product?.stock && (
          <p className="bg-[#6bffa9] w-24 text-center text-[#133621] text-sm py-2.5 font-semibold rounded-lg">
            In Stock
          </p>
        )}
        <p className="text-sm text-whitegold tracking-wide">
          {product?.description}
        </p>
        <div className="flex items-center gap-2.5 lg:gap-5">
          <AddToCartButton
            product={product}
            className="bg-golddark text-whitegold hover:bg-darkColor hoverEffect"
          />
          <button className="border-2 border-golddark/50 text-golddark bg-transparent px-2.5 py-1.5 rounded-md hover:text-whitegold hover:border-whitegold/50 hover:bg-[#975163] hoverEffect">
            <Heart className="w-5 h-5" />
          </button>
        </div>
        <ProductCharacteristics product={product} />
        <div className="flex flex-wrap items-center justify-between gap-2.5 border-b border-white py-5 -mt-2">
          <div className="flex items-center gap-2 text-sm text-whitegold/40 hover:text-golddark hoverEffect">
            <BoxIcon className="w-5 h-5" />
            <p>Compare color</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-whitegold/40 hover:text-golddark hoverEffect">
            <FileQuestion className="w-5 h-5" />
            <p>Ask a question</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-whitegold/40 hover:text-golddark hoverEffect">
            <ListOrderedIcon className="w-5 h-5" />
            <p>Delivery & Return</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-whitegold/40 hover:text-golddark hoverEffect">
            <Share className="w-5 h-5" />
            <p>Share</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-5">
          <div className="border border-white text-center p-3 hover:border-golddark rounded-md hoverEffect">
            <p className="text-base font-semibold text-whitegold">
              Cheap Shipping
            </p>
            <p className="text-sm text-whitegold/40">
              Budget-friendly for shipping
            </p>
          </div>
          <div className="border border-white text-center p-3 hover:border-golddark rounded-md hoverEffect">
            <p className="text-base font-semibold text-whitegold">
              Flexible Payment
            </p>
            <p className="text-sm text-whitegold/40">
              Pay with Multiple Credit Cards
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default SingleProductPage
