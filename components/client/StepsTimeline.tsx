"use client";

import React, { useState, useEffect, useRef } from "react";
import GlassCard from "../ui/GlassCard";
import { Step } from "../../data/steps";
import DynamicVideoPlayer from "./DynamicVideoPlayer";

interface StepsTimelineProps {
  steps: Step[];
}

export default function StepsTimeline({ steps }: StepsTimelineProps) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveStepIndex(index);
          }
        });
      },
      {
        root: null,
        rootMargin: "-30% 0px -30% 0px",
        threshold: 0,
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const activeStep = steps[activeStepIndex];

  return (
    <div className="steps-layout-container">
      {/* Desktop : Colonne Contenu (Gauche) */}
      <div className="content-column">
        {steps.map((step, index) => {
          const isActive = activeStepIndex === index;
          return (
            <section 
              key={step.id} 
              data-index={index}
              ref={(el) => {
                sectionRefs.current[index] = el;
              }}
              className="step-section"
            >
              <GlassCard className={`step-card ${isActive ? 'active' : ''}`}>
                
                {/* Numéro géant en filigrane (Le Wow Effect) */}
                <div className="step-watermark">
                  {step.id}
                </div>

                {/* Mobile UNIQUEMENT : Vidéo intégrée dans la carte (Inline) */}
                <div className="mobile-inline-video">
                  {step.imageUrl ? (
                    <img src={step.imageUrl} alt={step.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : step.videoUrl ? (
                    <DynamicVideoPlayer 
                      videoSrc={step.videoUrl} 
                      blurhash={step.blurhash}
                      tracks={step.vttUrl ? [{ src: step.vttUrl, srcLang: "fr", label: "Français" }] : undefined}
                    />
                  ) : null}
                </div>

                <div className="step-card-content">
                  <div className="step-badge">
                    Étape {step.id}
                  </div>
                  <h2 className="step-title">
                    {step.title.includes(" : ") ? step.title.split(" : ")[1] : step.title}
                  </h2>
                  <p className="step-description" dangerouslySetInnerHTML={{ __html: step.content }} />
                </div>
              </GlassCard>
            </section>
          );
        })}
      </div>

      {/* Desktop UNIQUEMENT : Colonne Média Sticky (Droite) */}
      <div className="media-column desktop-only-media">
        <div className="media-sticky-wrapper">
           <div className="media-player-container">
              {activeStep?.imageUrl ? (
                <img src={activeStep.imageUrl} alt={activeStep.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : activeStep?.videoUrl ? (
                <DynamicVideoPlayer 
                  videoSrc={activeStep.videoUrl} 
                  blurhash={activeStep.blurhash}
                  tracks={activeStep.vttUrl ? [{ src: activeStep.vttUrl, srcLang: "fr", label: "Français" }] : undefined}
                />
              ) : null}
           </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .steps-layout-container {
          display: flex;
          flex-direction: column;
          position: relative;
          width: 100vw;
          max-width: 100%;
          overflow-x: clip; /* clip au lieu de hidden pour permettre position: sticky */
          background: #fdfbfb;
        }

        /* --- MOBILE LAYOUT (Default) --- */
        .content-column {
          width: 100vw;
          max-width: 100%;
          z-index: 10;
          position: relative;
          padding: 2rem 0.5rem; /* Réduit : avant c'était 2rem 1rem */
          display: flex;
          flex-direction: column;
          gap: 4rem;
          box-sizing: border-box;
        }

        .step-section {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          box-sizing: border-box;
        }

        .desktop-only-media {
          display: none;
        }

        .mobile-inline-video {
          width: 100%;
          height: 30vh;
          min-height: 250px;
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 1.5rem;
          position: relative;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        /* --- GLASS CARD DESIGN --- */
        .step-card {
          width: 100%;
          max-width: 600px;
          padding: 1.25rem; /* Réduit : avant c'était 2rem (32px), maintenant 20px */
          position: relative;
          overflow: hidden;
          transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          border: 1px solid rgba(255,255,255,0.4);
          background: rgba(255, 255, 255, 0.7);
          box-shadow: 0 20px 40px rgba(0,0,0,0.05);
          box-sizing: border-box;
          border-radius: 20px; /* On ajoute un arrondi sympa pour mobile */
        }

        .step-card.active {
          opacity: 1;
          transform: scale(1) translateY(0);
          box-shadow: 0 30px 60px rgba(0,0,0,0.12);
          border: 1px solid rgba(255,255,255,0.8);
          background: rgba(255, 255, 255, 0.9);
        }
        
        /* The inactive cards fade out nicely */
        .step-card:not(.active) {
          opacity: 0.4;
          transform: scale(0.95) translateY(20px);
        }

        /* --- WOW EFFECT TYPOGRAPHY --- */
        .step-watermark {
          position: absolute;
          top: -10px;
          right: -10px;
          font-size: clamp(6rem, 20vw, 14rem);
          font-weight: 900;
          line-height: 0.8;
          color: rgba(0,0,0,0.03);
          z-index: 0;
          pointer-events: none;
          user-select: none;
          letter-spacing: -5px;
        }

        .step-card-content {
          position: relative;
          z-index: 10;
        }

        .step-badge {
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 3px;
          color: #888;
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .step-title {
          margin-bottom: 1.5rem;
          font-size: clamp(1.8rem, 6vw, 2.8rem);
          line-height: 1.1;
          letter-spacing: -1px;
          color: #111;
          font-weight: 800;
        }

        .step-description {
          line-height: 1.8;
          font-size: clamp(1rem, 3vw, 1.15rem);
          color: #444;
        }

        /* --- DESKTOP LAYOUT --- */
        @media (min-width: 1024px) {
          .steps-layout-container {
            flex-direction: row; /* Content on Left, Media on Right */
          }
          
          .content-column {
            width: 50vw;
            padding: 4rem;
            gap: 0;
          }

          .step-section {
            min-height: 100vh;
            justify-content: flex-end; /* Push cards towards the center */
            padding-right: 2rem;
          }

          .step-card {
            padding: 4rem; /* More luxurious padding on desktop */
          }

          .step-watermark {
            top: -40px;
            right: -20px;
          }

          .mobile-inline-video {
            display: none; /* Hide inline videos on desktop */
          }

          .desktop-only-media {
            display: block; /* Show sticky video on desktop */
          }

          .media-column {
            width: 50vw;
            height: 100vh;
            position: sticky;
            top: 0;
            z-index: 0;
          }

          .media-sticky-wrapper {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            padding: 2rem;
            padding-left: 0; /* Stick close to the center */
            box-sizing: border-box;
            display: flex;
            align-items: center;
          }

          .media-player-container {
            position: relative;
            width: 100%;
            height: 80vh; /* Don't stretch full height, give it elegant breathing room */
            border-radius: 24px;
            overflow: hidden;
            box-shadow: 0 40px 80px rgba(0,0,0,0.2);
            background: #000;
          }
        }
      `}} />
    </div>
  );
}
