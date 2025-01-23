"use client";
import React, { useState } from 'react';
import HomeTabbar from './HomeTabbar';
import { productStatus } from '@/constants';
import { useEffect } from 'react';
import { client } from '@/sanity/lib/client';
import { Product } from '@/sanity.types';
import ProductCard from './ProductCard';
import NoProductsAvailable from './NoProductsAvailable';
import { motion, AnimatePresence } from 'motion/react';
import { Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';



const ProductGrid = () => {
    const [selectedTab, setSelectedTab] = useState(productStatus[0]?.title || "");
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const query = `*[_type == 'product' && status ==$status] | order(name asc)`;
    const params = { status: selectedTab.toLowerCase() };
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await client.fetch(query, params);
                setProducts(await response);
            } catch (error) {
                console.log('product Fetching Error', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [selectedTab, params, query]);


    return (
        <div className='mt-10 my-20 flex flex-col items-center'>
            <HomeTabbar selectedTab={selectedTab} onTabSelect={setSelectedTab} />
            {loading ? (
                <div className='flex flex-col items-center justify-center py-10 min-h-80 space-y-4 text-center bg-gradient-to-r from-golddark  to-[#e2c58b] rounded-lg  w-full mt-10'>
                    <div className='flex items-center space-x-2 text-darkColor'>
                        <Loader2 className='animate-spin' />
                        <span className='text-xl font-semibold'>Product is loading...</span>
                    </div>

                </div>
            ) : (
                <>
                    {products?.length ? (
                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10 w-full'>
                            {products.slice(0, 4).map((product: Product) => (
                                <AnimatePresence key={product?._id}>
                                    <motion.div layout
                                        initial={{ opacity: 0.2 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        <ProductCard product={product} />
                                    </motion.div>
                                </AnimatePresence>
                            ))}
                        </div>
                    ) : (
                        <NoProductsAvailable selectedTab={selectedTab} />
                    )}

                </>
            )}
            <Link href={"/category/new"} className="group relative">
                <button className="w-full sm:w-auto px-6 py-3 mt-14 md:px-8 md:py-4 border border-golddark/30 text-golddark rounded-full font-semibold hover:bg-[#8B6D2F]/10 transition-all duration-300">
                    Open Shop
                </button>
            </Link>
        </div>
    );
}

export default ProductGrid;
