'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUsers } from 'react-icons/fa';
import { GiPerfumeBottle } from 'react-icons/gi';
import { TbBrandDenodo } from "react-icons/tb";

const stats = [
  { 
    id: 1, 
    label: 'Premium Fragrances Sold', 
    value: '10,000+', 
    description: 'Luxury perfumes delivered worldwide',
    icon: GiPerfumeBottle,
    color: 'text-[#f7e6c5da]'
  },
  { 
    id: 2, 
    label: 'Satisfied Customers', 
    value: '8,500+', 
    description: 'Verified customer satisfaction',
    icon: FaUsers,
    color: 'text-[#f7e6c5da]'
  },
  { 
    id: 3, 
    label: 'Available Brands', 
    value: '50+', 
    description: 'Curated luxury brands',
    icon: TbBrandDenodo,
    color: 'text-[#f7e6c5da]'
  },
];

export default function Stats() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="w-full flex items-center justify-center px-4">
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              className={`
                relative p-4 sm:p-6 text-center 
                border border-[#f7e6c5]/20 rounded-2xl
                transition-all duration-300 ease-in-out
                ${hoveredCard === stat.id 
                  ? 'shadow-xl scale-105 bg-[#f7e6c5]/5' 
                  : 'shadow-md'}
                transform origin-center
              `}
              initial={{ 
                opacity: 0, 
                y: 20,
                scale: 0.95
              }}
              animate={{ 
                opacity: 1, 
                y: 0,
                scale: 1
              }}
              transition={{ 
                duration: 0.5, 
                delay: stat.id * 0.2,
                type: "spring",
                stiffness: 120
              }}
              onHoverStart={() => setHoveredCard(stat.id)}
              onHoverEnd={() => setHoveredCard(null)}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex flex-col items-center">
                <motion.div
                  className="mb-3 sm:mb-4 flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#f7e6c5]/10"
                  initial={{ rotate: 0, scale: 1 }}
                  animate={{ 
                    rotate: hoveredCard === stat.id ? 360 : 0,
                    scale: hoveredCard === stat.id ? 1.2 : 1,
                    transition: { 
                      duration: 0.5,
                      type: "spring",
                      stiffness: 200
                    }
                  }}
                >
                  <stat.icon 
                    className={`text-3xl sm:text-4xl ${stat.color}`} 
                  />
                </motion.div>
                
                <motion.h2 
                  className="text-2xl sm:text-3xl font-bold text-golddark mb-2 font-italiana"
                  animate={{ 
                    scale: hoveredCard === stat.id ? 1.1 : 1,
                    transition: { duration: 0.3 }
                  }}
                >
                  {stat.value}
                </motion.h2>
                
                <div className="text-center">
                  <p className="text-base sm:text-lg text-[#f7e6c5da] mb-1">
                    {stat.label}
                  </p>
                  <p className="text-xs sm:text-sm text-[#f7e6c5da]/70">
                    {stat.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}