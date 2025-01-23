'use client';

import { ArrowRight } from 'lucide-react';
import Container from '@/components/container';
import Image from 'next/image';
import landingphoto from '@/images/landingphoto1.png';
import backgroundImage from '@/images/background.jpg';
import { motion } from 'framer-motion';
import Link from 'next/link';


const LandingPage = () => {
    return (
        <div className="relative w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={backgroundImage}
                    alt="Background"
                    fill
                    quality={100}
                    priority
                    className="object-cover opacity-90"
                />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F]/80 via-[#0F0F0F]/90 to-[#0F0F0F]/80 z-10" />

            <section className="relative z-20">
                <Container className="relative z-10">
                    <div className="py-10 md:py-16 px-4 sm:px-6 lg:px-8 -mt-4 xs:-mt-6 sm:-mt-8 md:-mt-12 lg:-mt-16 xl:-mt-20 2xl:-mt-24 space-y-4 md:space-y-6 relative z-20">
                        <div className="grid lg:grid-cols-2 gap-8 items-center">
                            {/* Konten Teks */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="text-left order-1 lg:order-1 z-20"
                            >
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.5, duration: 0.6 }}
                                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full 
                                    bg-[#8B6D2F]/10 backdrop-blur-sm border border-[#8B6D2F]/20 mb-4 md:mb-8"
                                >
                                    <span className="text-xs md:text-sm text-[#FFD700]/80 hoverEffect">
                                        Discover our new collection
                                    </span>
                                </motion.div>

                                <motion.h1
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7, duration: 0.8 }}
                                    className="text-3xl sm:text-3xl md:text-4xl lg:text-6xl tracking-tighter 
                                    bg-gradient-to-b from-white to-golddark text-transparent bg-clip-text mb-5 md:mb-6 leading-[1.9] md:leading-[1.9] font-italiana"
                                >
                                    Explore the Elegance
                                </motion.h1>

                                <motion.p
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.9, duration: 0.8 }}
                                    className="text-sm sm:text-base md:text-lg text-[#f7e6c5da] mb-6 md:mb-10 leading-relaxed"
                                >
                                    Unveil a world of luxurious sophistication with our meticulously crafted perfumes.
                                    Each fragrance is a testament to refined artistry, designed to elevate your
                                    essence and create unforgettable moments.
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.1, duration: 0.8 }}
                                    className="flex flex-col sm:flex-row gap-3 md:gap-4 items-center"
                                >
                                    <Link 
                                    className='w-full sm:w-auto group relative'
                                    href="/category/new">
                                        <button className="w-full sm:w-auto group relative px-6 py-3 md:px-8 md:py-4 bg-[#a58441] text-white rounded-full font-semibold hover:bg-[#8B6D2F]/90 transition-all duration-300 flex items-center justify-center gap-2">
                                            Discover Collection
                                            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform animate-pulse" />
                                        </button>
                                    </Link>
                                    
                                    <Link
                                    className='w-full sm:w-auto group relative'
                                    href="/about">
                                    <button className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 
                                        border border-[#8B6D2F]/30 text-[#8B6D2F] 
                                        rounded-full font-semibold hover:bg-[#8B6D2F]/10 
                                        transition-all duration-300">
                                        Learn More
                                    </button>
                                    </Link>
                                </motion.div>
                            </motion.div>

                            {/* Kontainer Gambar */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] 
                                flex items-center justify-center order-2 lg:order-2 z-10"
                            >
                                <div className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-none">
                                    <Image
                                        src={landingphoto}
                                        alt="Luxury Perfume"
                                        width={400}
                                        height={600}
                                        className="object-contain w-full h-full drop-shadow-2xl animate-float brightness-[0.9] "
                                    />
                                </div>

                                {/* Elemen Dekoratif Hanya di Layar Besar */}
                                <div className="hidden lg:block">
                                    <div className="absolute top-1/5 right-1/4 w-32 h-20 bg-[#F1DFC0]/30 rounded-full blur-xl animate-pulse" />
                                    <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-[#F1DFC0]/30 rounded-full blur-xl animate-pulse delay-700" />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default LandingPage;