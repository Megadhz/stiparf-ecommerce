"use client";
import { CATEGORIES_QUERYResult, Product } from "@/sanity.types";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { client } from "@/sanity/lib/client";
import { Loader2 } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import ProductCard from "./ProductCard";
import NoProductsAvailable from "./NoProductsAvailable";

interface Props {
  categories: CATEGORIES_QUERYResult;
  slug: string;
}

const CategoryProducts = ({ categories, slug }: Props) => {
  const [currentSlug, setCurrentSlug] = useState(slug);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  
  const processedCategories = React.useMemo(() => {
    if (!categories || !Array.isArray(categories)) return [];
    
    
    const categoryOrder = ['new', 'men', 'discount', 'mens', 'women', 'unisex'];
    
    return categories
      .map(item => {
        if (!item) return null;
        
        
        if (item?.slug?.current === 'men') {
          return {
            ...item, 
            title: 'Hot', 
            slug: { 
              ...item.slug, 
              current: 'men' 
            }
          };
        }
        return item;
      })
      .filter(Boolean)
      .sort((a, b) => {
        const indexA = categoryOrder.indexOf(a?.slug?.current || '');
        const indexB = categoryOrder.indexOf(b?.slug?.current || '');
        
        
        if (indexA !== -1 && indexB !== -1) {
          return indexA - indexB;
        }
        
        
        if (indexA !== -1) return -1;
        if (indexB !== -1) return 1;
        
        
        return (a?.title || '').localeCompare(b?.title || '');
      });
  }, [categories]);

  const fetchProducts = async (categorySlug: string) => {
    try {
      setLoading(true);
      const query = `*[_type == 'product' && 
        references(*[_type == 'category' && 
          slug.current == $categorySlug
        ]._id)
      ] | order(name asc)`;
      
      const data = await client.fetch(query, { categorySlug });
      
      console.log(`Products for ${categorySlug}:`, data);
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    
    console.log('Processed Categories:', processedCategories);
    console.log('Current Slug:', currentSlug);
    
    
    if (currentSlug) {
      fetchProducts(currentSlug);
    }
  }, [currentSlug, processedCategories]);

  
  useEffect(() => {
    if (processedCategories && processedCategories.length > 0 && !currentSlug) {
      const firstCategory = processedCategories[0];
      if (firstCategory?.slug?.current) {
        setCurrentSlug(firstCategory.slug.current);
      }
    }
  }, [processedCategories]);

  return (
    <div className="py-5 flex flex-col md:flex-row items-start gap-5">
      {/* Sidebar Kategori */}
      <div className="flex flex-col md:min-w-40 border border-golddark">
        {processedCategories?.map((item) => (
          <Button
            key={item?._id}
            onClick={() => setCurrentSlug(item?.slug?.current as string)}
            className={`
              bg-transparent 
              border-0 
              border-golddark
              rounded-none 
              text-whitegold 
              shadow-none 
              hover:bg-golddark/40 
              hover:text-whitegold 
              font-semibold 
              hoverEffect 
              border-b 
              last:border-b-0 
              ${item?.slug?.current === currentSlug 
                ? "bg-golddark text-whitegold border-golddark" 
                : ""
              }
            `}
          >
            {item?.title}
          </Button>
        ))}
      </div>

      {/* Konten Produk */}
      <div className="w-full">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-10 min-h-80 space-y-4 text-center bg-gradient-to-r from-golddark to-[#e2c58b] rounded-lg w-full mt-10">
            <div className="flex items-center space-x-2 text-[#111111]">
              <Loader2 className="animate-spin" />
              <span className="text-lg font-semibold">
                Product is loading...
              </span>
            </div>
          </div>
        ) : (
          <>
            {products?.length ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
                {products?.map((product: Product) => (
                  <AnimatePresence key={product?._id}>
                    <motion.div
                      layout
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
              <NoProductsAvailable
                selectedTab={currentSlug}
                className="mt-0 w-full"
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default CategoryProducts;