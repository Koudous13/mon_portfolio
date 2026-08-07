"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function ScrollRouter() {
  const pathname = usePathname();
  const isProgrammaticScroll = useRef(false);

  useEffect(() => {
    // Observer pour mettre à jour l'URL lors du scroll
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // 50% de la section doit être visible
    };

    const callback: IntersectionObserverCallback = (entries) => {
      // Ignorer si on est en train de scroller programmatiquement (ex: clic back/forward)
      if (isProgrammaticScroll.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const step = entry.target.getAttribute("data-step");
          if (step) {
            const newUrl = `/etape/${step}`;
            if (window.location.pathname !== newUrl) {
              window.history.replaceState(null, "", newUrl);
            }
          } else if (entry.target.classList.contains("hero-section")) {
             // Root / hero
             if (window.location.pathname !== "/") {
                window.history.replaceState(null, "", "/");
             }
          }
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    
    // Observers toutes les sections qui ont l'attribut data-step
    const sections = document.querySelectorAll("[data-step]");
    sections.forEach((section) => observer.observe(section));

    // Observer aussi la section hero (sans data-step)
    const hero = document.querySelector(".hero-section");
    if (hero) observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Gestion du popstate (Bouton Back/Forward du navigateur)
    const handlePopState = () => {
      const path = window.location.pathname;
      let targetElement: Element | null = null;

      if (path.startsWith("/etape/")) {
        const step = path.split("/etape/")[1];
        targetElement = document.querySelector(`[data-step="${step}"]`);
      } else if (path === "/") {
        targetElement = document.querySelector(".hero-section");
      }

      if (targetElement) {
        isProgrammaticScroll.current = true;
        targetElement.scrollIntoView({ behavior: "smooth" });
        
        // Réinitialiser le flag après un délai (le temps du smooth scroll)
        setTimeout(() => {
          isProgrammaticScroll.current = false;
        }, 1000);
      }
    };

    window.addEventListener("popstate", handlePopState);
    
    // Déclenchement initial au cas où l'utilisateur atterrit directement sur /etape/03
    setTimeout(() => handlePopState(), 100);

    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return null; // Component invisible
}
