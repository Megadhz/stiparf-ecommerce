'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function SplashScreen({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  const [isLoading, setIsLoading] = useState(true);
  const splashRef = useRef<HTMLDivElement>(null);
  const welcomeRef = useRef<HTMLHeadingElement>(null);
  const logoRef = useRef<SVGSVGElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(splashRef.current, {
            opacity: 0,
            duration: 0.5,
            onComplete: () => setIsLoading(false)
          });
        }
      });

      if (
        welcomeRef.current && 
        logoRef.current && 
        titleRef.current && 
        subtitleRef.current && 
        dotsRef.current
      ) {
        
        tl.fromTo(
          welcomeRef.current,
          { 
            scale: 0.5, 
            opacity: 0 
          },
          { 
            scale: 1, 
            opacity: 1, 
            duration: 1, 
            ease: 'back.out(1.7)'
          }
        )
        .to(
          welcomeRef.current,
          {
            opacity: 0,
            scale: 1.2,
            duration: 0.5,
            delay: 1
          }
        )
        
        .fromTo(
          logoRef.current,
          { 
            scale: 0, 
            rotation: -180, 
            opacity: 0 
          },
          { 
            scale: 1, 
            rotation: 0, 
            opacity: 1, 
            duration: 1, 
            ease: 'back.out(1.7)' 
          }
        )
        
        .fromTo(
          titleRef.current,
          { 
            y: 50, 
            opacity: 0 
          },
          { 
            y: 0, 
            opacity: 1, 
            duration: 0.8, 
            ease: 'power3.out' 
          },
          '-=0.5'
        )
        
        .fromTo(
          subtitleRef.current,
          { 
            y: 30, 
            opacity: 0 
          },
          { 
            y: 0, 
            opacity: 1, 
            duration: 0.6, 
            ease: 'power2.out' 
          },
          '-=0.4'
        )
        
        .fromTo(
          Array.from(dotsRef.current.children),
          { 
            scale: 0, 
            opacity: 0 
          },
          { 
            scale: 1, 
            opacity: 1, 
            duration: 0.5, 
            stagger: 0.2,
            ease: 'back.out(1.5)' 
          }
        );
      }

      return () => {
        tl.kill();
      };
    }
  }, []);

  if (isLoading) {
    return (
      <div 
        ref={splashRef}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center 
        bg-[#111111]"
      >
        <div className="flex flex-col items-center justify-center">
          {/* Welcome Text */}
          <h1
            ref={welcomeRef}
            className="text-5xl font-bold text-[#C5A057] tracking-wider absolute font-italiana"
          >
            WELCOME
          </h1>

          {/* Animated Logo */}
          <svg
            ref={logoRef}
            width="100"
            height="100"
            viewBox="0 0 100 100"
            className="mb-4 text-[#C5A057] opacity-0"
          >
            <path
              d="M50 10 L80 50 L50 90 L20 50 Z"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
            />
          </svg>

          {/* Animated Text */}
          <h1
            ref={titleRef}
            className="text-4xl font-bold text-[#C5A057] tracking-wider opacity-0 font-italiana"
          >
            STIPARF
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="text-sm text-gray-400 mt-2 tracking-widest uppercase opacity-0"
          >
            E-commerce Parfum
          </p>

          {/* Loading Dots */}
          <div 
            ref={dotsRef}
            className="absolute bottom-10 flex space-x-2"
          >
            {[1, 2, 3].map((dot) => (
              <div
                key={`loading-dot-${dot}`}
                className="w-3 h-3 bg-gray-600/50 rounded-full"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}