'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Container from "@/components/container";
import ContactForm from './ContactForm';
import MapSection from './MapSection';

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6,
        ease: "easeOut"
      }}
      className="min-h-screen w-full"
    >
      <Container className="max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Kolom Kiri - Form */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="w-full md:w-1/2 order-2 md:order-1"
          >
            <div className="p-6 md:p-8">

              <ContactForm />
            </div>
          </motion.div>

          {/* Kolom Kanan - Peta */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="w-full md:w-1/2 order-1 md:order-2"
          >
            <div className=" p-6 md:p-8">
              <MapSection />
            </div>
          </motion.div>
        </div>
      </Container>
    </motion.div>
  );
}