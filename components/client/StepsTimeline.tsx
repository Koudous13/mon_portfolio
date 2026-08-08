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
      
    </div>
  );
}
