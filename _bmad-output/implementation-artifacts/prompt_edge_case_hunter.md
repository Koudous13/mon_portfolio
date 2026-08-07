Invoke the `bmad-review-edge-case-hunter` skill on this diff:

```diff
diff --git a/app/page.tsx b/app/page.tsx
new file mode 100644
index 0000000..d70ec3e
--- /dev/null
+++ b/app/page.tsx
@@ -0,0 +1,45 @@
+import ScrollRouter from "../components/client/ScrollRouter";
+
+export default function Home() {
+  return (
+    <>
+      <ScrollRouter />
+      <main className="hero-section" style={{ minHeight: "100vh", padding: "2rem" }}>
+        <div className="glass-card" style={{ padding: "3rem", maxWidth: "800px", margin: "0 auto", position: "relative", zIndex: 10 }}>
+          <h1 className="hero-title">The Process</h1>
+          <p className="hero-subtitle">
+            Une exploration technique approfondie de l'idée à la solution.
+            Scrollez pour découvrir l'architecture.
+          </p>
+        </div>
+
+        <div className="scroll-indicator">
+          <span>Scroll</span>
+          <svg 
+            width="24" 
+            height="24" 
+            viewBox="0 0 24 24" 
+            fill="none" 
+            stroke="currentColor" 
+            strokeWidth="2" 
+            strokeLinecap="round" 
+            strokeLinejoin="round"
+          >
+            <path d="M12 5v14M19 12l-7 7-7-7"/>
+          </svg>
+        </div>
+      </main>
+
+      {/* Sections d'étapes (simulées pour l'instant) */}
+      <section data-step="01" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", borderTop: "1px solid #ddd" }}>
+        <h2>Étape 01 : PRD</h2>
+      </section>
+      <section data-step="02" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", borderTop: "1px solid #ddd" }}>
+        <h2>Étape 02 : Architecture</h2>
+      </section>
+      <section data-step="03" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", borderTop: "1px solid #ddd" }}>
+        <h2>Étape 03 : UX Design</h2>
+      </section>
+    </>
+  );
+}
diff --git a/components/client/ScrollRouter.tsx b/components/client/ScrollRouter.tsx
new file mode 100644
index 0000000..739324e
--- /dev/null
+++ b/components/client/ScrollRouter.tsx
@@ -0,0 +1,82 @@
+"use client";
+
+import { useEffect, useRef } from "react";
+import { usePathname } from "next/navigation";
+
+export default function ScrollRouter() {
+  const pathname = usePathname();
+  const isProgrammaticScroll = useRef(false);
+
+  useEffect(() => {
+    // Observer pour mettre à jour l'URL lors du scroll
+    const options = {
+      root: null,
+      rootMargin: "0px",
+      threshold: 0.5, // 50% de la section doit être visible
+    };
+
+    const callback: IntersectionObserverCallback = (entries) => {
+      // Ignorer si on est en train de scroller programmatiquement (ex: clic back/forward)
+      if (isProgrammaticScroll.current) return;
+
+      entries.forEach((entry) => {
+        if (entry.isIntersecting) {
+          const step = entry.target.getAttribute("data-step");
+          if (step) {
+            const newUrl = `/etape/${step}`;
+            if (window.location.pathname !== newUrl) {
+              window.history.replaceState(null, "", newUrl);
+            }
+          } else if (entry.target.classList.contains("hero-section")) {
+             // Root / hero
+             if (window.location.pathname !== "/") {
+                window.history.replaceState(null, "", "/");
+             }
+          }
+        }
+      });
+    };
+
+    const observer = new IntersectionObserver(callback, options);
+    
+    // Observers toutes les sections qui ont l'attribut data-step
+    const sections = document.querySelectorAll("[data-step]");
+    sections.forEach((section) => observer.observe(section));
+
+    // Observer aussi la section hero (sans data-step)
+    const hero = document.querySelector(".hero-section");
+    if (hero) observer.observe(hero);
+
+    return () => observer.disconnect();
+  }, []);
+
+  useEffect(() => {
+    // Gestion du popstate (Bouton Back/Forward du navigateur)
+    const handlePopState = () => {
+      const path = window.location.pathname;
+      let targetElement: Element | null = null;
+
+      if (path.startsWith("/etape/")) {
+        const step = path.split("/etape/")[1];
+        targetElement = document.querySelector(`[data-step="${step}"]`);
+      } else if (path === "/") {
+        targetElement = document.querySelector(".hero-section");
+      }
+
+      if (targetElement) {
+        isProgrammaticScroll.current = true;
+        targetElement.scrollIntoView({ behavior: "smooth" });
+        
+        // Réinitialiser le flag après un délai (le temps du smooth scroll)
+        setTimeout(() => {
+          isProgrammaticScroll.current = false;
+        }, 1000);
+      }
+    };
+
+    window.addEventListener("popstate", handlePopState);
+    return () => window.removeEventListener("popstate", handlePopState);
+  }, []);
+
+  return null; // Component invisible
+}
```
