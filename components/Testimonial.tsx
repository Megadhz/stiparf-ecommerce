'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Title from './Title';
import avatar1 from '@/images/testimonials/arga ceara.png';
import avatar2 from '@/images/testimonials/adidoy omen.jpg';
import avatar3 from '@/images/testimonials/cokorda gede.jpg';
import avatar4 from '@/images/testimonials/king raynar.jpg';
import avatar5 from '@/images/testimonials/kanha mastermind.jpg';
import avatar6 from '@/images/testimonials/rafael barusadar.jpg';
import Stats from './Stats';
import QuotesPage from './Quotes';

const Testimonial: React.FC = () => {
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

    const testimonials = [
        {
            quote: "Iseng beli doang eh ternyata ori parah sih, auto kuylah ordernya, gas order guys!",
            name: "Arga Ceara",
            role: "Anak valorant",
            avatar: avatar1,
            rating: 5
        },
        {
            quote: "Barang sampai dengan aman, produk original dan kualitasnya oke banget sesuai ekspektasi.. worth!",
            name: "Adidoy Omen",
            role: "Web Developer",
            avatar: avatar2,
            rating: 5
        },
        {
            quote: "Habis liat dari tiktok, emang no debat kualitasnya, pengirimannya on point parah!",
            name: "Cokde Gacor",
            role: "Ketua KSR",
            avatar: avatar3,
            rating: 5
        },
        {
            quote: "Real talk nih gaes, tempat belanja paling valid sih! Cs-nya fast resp, barang ori semua.",
            name: "King Raynar",
            role: "Multimedia",
            avatar: avatar4,
            rating: 5
        },
        {
            quote: "Sumpah bestie belanjanya gampang, cs-nya fast resp poll, gw udah checkout 40 parfum disini >-<",
            name: "Kanha Mastermind",
            role: "Egoistah",
            avatar: avatar5,
            rating: 5
        },
        {
            quote: "Aku kira seperti toko sebelah, ternyata disini bener bener ori coy, Cepatkan Bayar!!!",
            name: "Rafael Barusadar",
            role: "Fans Em Yu",
            avatar: avatar6,
            rating: 5
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonialIndex((prevIndex) =>
                (prevIndex + 3) % testimonials.length
            );
        }, 5000); 

        return () => clearInterval(interval);
    }, [testimonials.length]);

    const getVariants = () => ({
        initial: {
            opacity: 0,
            scale: 0.95 
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "tween", 
                duration: 0.5
            }
        },
        hover: {
            scale: 1.02, 
            transition: {
                duration: 0.3
            }
        },
        exit: {
            opacity: 0,
            scale: 0.95,
            transition: {
                duration: 0.3
            }
        }
    });

    const displayTestimonials = testimonials.slice(
        currentTestimonialIndex,
        currentTestimonialIndex + 3
    );

    return (
        <div className=" min-h-screen py-16">
                  
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 10
                    }}
                    className="text-center mb-16"
                >
                    <div className='flex flex-col items-center justify-center gap-5 py-10'>
                        <Title className="text-5xl text-golddark md:text-5xl text-center font-italiana tracking-tighter">
                            What Our Customers Say
                        </Title>
                        <p className="text-sm text-center text-[#f7e6c5da] font-medium max-w-[480px]">
                            Hear directly from those who have experienced our fragrances
                        </p>
                    </div>
                    <Stats/>
                </motion.div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentTestimonialIndex}
                        className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24"
                    >
                        {displayTestimonials.map((testimonial, index) => (
                            <motion.div
                                key={`${currentTestimonialIndex}-${index}`}
                                variants={getVariants()}
                                initial="initial"
                                animate="visible"
                                exit="exit"
                                whileHover="hover"
                                className="bg-whitegold rounded-2xl 
                                    shadow-lg border-2 border-golddark p-6 
                                    transform transition-all duration-300"
                            >
                                <div className="flex items-center mb-4 space-x-2">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <motion.svg
                                            key={i}
                                            initial={{ scale: 0.5, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 300,
                                                delay: i * 0.1
                                            }}
                                            className="w-6 h-6 text-amber-500"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </motion.svg>
                                    ))}
                                </div>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 100
                                    }}
                                    className="text-lg mb-6 italic text-gray-600"
                                >
                                    &ldquo;{testimonial.quote}&rdquo;
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 100
                                    }}
                                    className="flex items-center space-x-4"
                                >
                                    <div className="relative w-16 h-16 rounded-full overflow-hidden shadow-md">
                                        <Image
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800">
                                            {testimonial.name}
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                    
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
            <QuotesPage/>
        </div>
        
    );
};

export default Testimonial;