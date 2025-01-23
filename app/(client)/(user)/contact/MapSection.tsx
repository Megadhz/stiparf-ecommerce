'use client'; 

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export default function MapSection() {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center mb-4 space-x-2">
          <MapPin className="w-6 h-6 text-golddark" />
          <h2 className="text-2xl font-bold text-golddark">Our Location</h2>
        </div>
        
        <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-2xl group">


          {/* Google Maps Iframe */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.5643975287885!2d115.22400397494214!3d-8.673244891374582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd240f24881c587%3A0xe8413f111e0aa096!2sInstitut%20Teknologi%20Dan%20Bisnis%20STIKOM%20BALI!5e1!3m2!1sid!2sid!4v1737440064284!5m2!1sid!2sid"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(30%) contrast(110%)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
          />
        </div>
      </motion.div>
    </div>
  );
}