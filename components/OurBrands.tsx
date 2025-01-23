'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Brand1 from '@/images/brands/Brand1.png';
import Brand2 from '@/images/brands/Brand2.png';
import Brand3 from '@/images/brands/Brand3.png';
import Brand4 from '@/images/brands/Brand4.png';
import Brand5 from '@/images/brands/Brand5.png';
import Brand6 from '@/images/brands/Brand6.png';
import Brand7 from '@/images/brands/Brand7.png';
import Brand8 from '@/images/brands/Brand8.png';
import Brand9 from '@/images/brands/Brand9.png';
import Brand10 from '@/images/brands/Brand10.png';
import Brand11 from '@/images/brands/Brand11.png';
import Brand12 from '@/images/brands/Brand12.png';
import Brand13 from '@/images/brands/Brand13.png';


const brandLogos = [
    Brand1,
    Brand2,
    Brand3,
    Brand4,
    Brand5,
    Brand6,
    Brand7,
    Brand8,
    Brand9,
    Brand10,
    Brand11,
    Brand12,
    Brand13
];

const OurBrands = () => {
    return (
        <div className="relative bg-[#111111] py-4 sm:py-6 overflow-hidden 
            border-t border-b border-[#8B6D2F]/30 
            before:absolute before:inset-0 before:bg-gradient-to-b 
            before:from-[#111111] before:via-transparent before:to-[#111111] 
            before:pointer-events-none before:z-10">
            <div className="container mx-auto px-4 relative z-20">
                <div className="relative w-full overflow-hidden">
                    {/* Gradient overlay kiri */}
                    <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 z-30 
                        bg-gradient-to-r from-[#111111] to-transparent" />
                    
                    {/* Gradient overlay kanan */}
                    <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 z-30 
                        bg-gradient-to-l from-[#111111] to-transparent" />

                    <motion.div 
                        className="flex items-center space-x-8 sm:space-x-16"
                        animate={{
                            x: [0, "-100%", 0],
                            transition: {
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear"
                            }
                        }}
                    >
                        {[...brandLogos, ...brandLogos, ...brandLogos].map((logo, index) => (
                            <div 
                                key={index} 
                                className="flex-shrink-0 w-40 h-28 sm:w-64 sm:h-44 relative 
                                grayscale hover:grayscale-0 transition-all duration-300 
                                hover:scale-110 group cursor-pointer"
                            >
                                <Image 
                                    src={logo} 
                                    alt={`Brand Logo ${index + 1}`}
                                    fill
                                    sizes="(max-width: 640px) 160px, 256px"
                                    className="object-contain 
                                    group-hover:brightness-125 transition-all duration-300"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default OurBrands;