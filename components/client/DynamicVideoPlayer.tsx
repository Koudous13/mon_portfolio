"use client";

import React, { useRef, useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";

interface DynamicVideoPlayerProps {
  videoSrc?: string;
  blurhash?: string;
  tracks?: { src: string; srcLang: string; label: string }[];
}

export default function DynamicVideoPlayer({ videoSrc, blurhash, tracks }: DynamicVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // When videoSrc changes, we need to reset the loaded state and reload the video
  useEffect(() => {
    setIsVideoLoaded(false);
    if (videoRef.current) {
      videoRef.current.load();
      // Attempt to autoplay the new video
      videoRef.current.play().catch((e) => console.log("Auto-play prevented:", e));
    }
  }, [videoSrc]);

  // Handle cached videos
  useEffect(() => {
    if (videoRef.current && videoRef.current.readyState >= 2) {
      setIsVideoLoaded(true);
    }
  }, [videoSrc]);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  if (!videoSrc) return null;

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", background: "#000" }}>
      {/* BlurHash Placeholder */}
      {blurhash && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
            opacity: isVideoLoaded ? 0 : 1,
            transition: "opacity 0.8s ease",
            pointerEvents: "none",
          }}
        >
          <Blurhash
            hash={blurhash}
            width="100%"
            height="100%"
            resolutionX={32}
            resolutionY={32}
            punch={1}
          />
        </div>
      )}

      {/* Video Player */}
      <video
        ref={videoRef}
        muted={isMuted}
        playsInline
        loop
        preload="auto"
        onLoadedData={() => setIsVideoLoaded(true)}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: isVideoLoaded ? 1 : 0,
          transition: "opacity 0.5s ease",
          zIndex: 2,
        }}
      >
        <source src={videoSrc} type="video/mp4" />
        {tracks?.map((track, idx) => (
          <track
            key={idx}
            src={track.src}
            kind="captions"
            srcLang={track.srcLang}
            label={track.label}
            default={idx === 0}
          />
        ))}
      </video>

      {/* Floating Controls Overlay */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
          zIndex: 20,
        }}
      >
        <button
          onClick={toggleMute}
          style={{
            pointerEvents: "auto",
            background: "rgba(0, 0, 0, 0.4)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            color: "white",
            padding: "10px",
            borderRadius: "50%",
            cursor: "pointer",
            backdropFilter: "blur(12px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "44px",
            height: "44px",
            transition: "all 0.3s ease",
          }}
          aria-label={isMuted ? "Activer le son" : "Couper le son"}
          title={isMuted ? "Activer le son" : "Couper le son"}
          onMouseOver={(e) => (e.currentTarget.style.background = "rgba(0, 0, 0, 0.6)")}
          onMouseOut={(e) => (e.currentTarget.style.background = "rgba(0, 0, 0, 0.4)")}
        >
          {isMuted ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>
          )}
        </button>
      </div>
    </div>
  );
}
