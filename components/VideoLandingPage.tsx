'use client'
import React, { useRef} from 'react'

const VideoLandingPage: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null)


  return (
    <div className="relative w-full h-screen overflow-hidden border-t border-t-golddark">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src="https://raw.githubusercontent.com/Megadhz/my-video-hosting/main/y2mate.com%20-%20LOr%20de%20Jadore%20the%20new%20perfume_720pFH.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-gradient-to-b  from-gray-900/60 via-[#212121]/20 to-[#313030] "></div>

      {/* Overlay Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center 
                      bg-black bg-opacity-30 text-whitegold text-center">
        <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tighter font-italiana">
          STIPARF
        </h1>
        <p className="text-1xl mb-8 animate-fade-in-delay text-whitegold">
          Perfume Collection
        </p>

      </div>
    </div>
  )
}

export default VideoLandingPage