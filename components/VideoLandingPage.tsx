'use client'
import React, { useRef, useState } from 'react'

const VideoLandingPage: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play()
        setIsPlaying(true)
      } else {
        videoRef.current.pause()
        setIsPlaying(false)
      }
    }
  }

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
          src="https://cdn.discordapp.com/attachments/1283802742271381649/1329711146302967918/y2mate.com_-_LOr_de_Jadore_the_new_perfume_720pFH.mp4?ex=678b5582&is=678a0402&hm=30094045a1e08b06be694933ca73ad363bbf59fc8b7b8f86fcb3f8eb76603836&"
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