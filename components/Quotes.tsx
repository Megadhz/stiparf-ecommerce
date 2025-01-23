'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';


const parfumQuotes = [
  {
    quote: "Perfume is an invisible memory, yet always remembered.",
    author: "Anonymous"
  },
  {
    quote: "Every scent has a story, every bottle holds a secret.",
    author: "Perfume Maestro"
  },
  {
    quote: "Perfume is not just a fragrance, but an unspoken expression of the soul.",
    author: "Essence Creator"
  }
];

const QuotesPage: React.FC = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const quoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    
    const quoteTimeline = gsap.timeline();

    if (quoteRef.current) {
      quoteTimeline
        .fromTo(quoteRef.current, 
          { 
            opacity: 0, 
            y: 50, 
            scale: 0.95 
          },
          { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            duration: 2,
            ease: 'power3.out' 
          }
        )
        .to(quoteRef.current, {
          opacity: 0,
          y: -50,
          scale: 0.95,
          duration: 2,
          delay: 7,
          ease: 'power3.in'
        });
    }

    
    const quoteInterval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => 
        (prevIndex + 1) % parfumQuotes.length
      );
    }, 5000);

    
    return () => {
      clearInterval(quoteInterval);
      quoteTimeline.kill();
    };
  }, [currentQuoteIndex]);

  const currentQuote = parfumQuotes[currentQuoteIndex];

  return (
    <div 
      className="
        mb-10
        flex 
        items-center 
        justify-center 
        bg-transparent 
        p-4
        font-raleway
      "
    >
      <div 
        ref={quoteRef}
        className="
          text-center 
          text-golddark
          max-w-2xl 
          mx-auto 
          p-8 
          bg-transparent
        "
      >
        <blockquote 
          className="
            text-2xl 
            md:text-4xl 
            font-light 
            tracking-wide 
            leading-relaxed 
            mb-6 
            italic
          "
        >
          "{currentQuote.quote}"
        </blockquote>
        <p 
          className="
            text-lg 
            md:text-xl 
            opacity-70 
            font-thin
            text-center
          "
        >
          - {currentQuote.author}
        </p>
      </div>

      {/* Indikator Progress */}

    </div>
  );
};

export default QuotesPage;