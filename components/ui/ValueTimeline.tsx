import React from "react";
import GlassCard from "./GlassCard";

interface TimelineItem {
  id: string;
  tagline: string;
  badge: string;
  location: string;
  title: string;
  description: React.ReactNode;
}

const items: TimelineItem[] = [
  {
    id: "01",
    tagline: "Le Mindset",
    badge: "Rigueur Sénior",
    location: "Architecture & Standards",
    title: "Pourquoi Moi ?",
    description: (
      <>
        À l'ère de l'IA, tout le monde peut coder. Moi, je ne code pas : <strong className="text-gradient">je suis l'Architecte</strong>. Je maltraite l'IA, je l'oblige à justifier chaque micro-décision et je lui impose un processus prédéfini par des Tech Leads avec plus de <span className="highlight-marker">10 ans d'expérience</span>. Tests d'<span className="highlight-marker">efficience, sécurité et revues critiques</span> à chaque niveau. L'application ne se contente pas de fonctionner : elle est <strong className="text-gradient">blindée</strong>.
      </>
    )
  },
  {
    id: "02",
    tagline: "La Méthode",
    badge: "Zéro Compromis",
    location: "Efficience Maximale",
    title: "Comment je travaille ?",
    description: (
      <>
        La <strong className="text-gradient">rapidité sans la sécurité</strong> n'est qu'une illusion. Je transforme vos problèmes complexes en solutions logicielles de manière <span className="highlight-marker">efficiente et ultra-rapide</span>, avec une architecture pensée pour évoluer (<span className="highlight-marker">Scalabilité</span>).
      </>
    )
  },
  {
    id: "03",
    tagline: "Le Résultat",
    badge: "Production",
    location: "Impact & Performance",
    title: "Ce que vous obtenez",
    description: (
      <>
        À la fin, vous n'obtenez pas juste une application qui &quot;fonctionne&quot;. Vous obtenez un produit digital <strong className="text-gradient">optimisé SEO/GEO</strong>, avec une <span className="highlight-marker">expérience utilisateur fluide</span>, prêt à <strong className="text-gradient">dominer le marché</strong> sans vaciller.
      </>
    )
  }
];

export default function ValueTimeline() {
  return (
    <div className="value-timeline">
      {items.map((item, index) => (
        <div key={item.id} className="vt-item">

          {/* Ligne verticale + Point */}
          <div className="vt-track">
            <div className="vt-dot"></div>
            {index !== items.length - 1 && <div className="vt-line"></div>}
          </div>

          {/* Colonne Informations de gauche */}
          <div className="vt-meta">
            <div className="vt-tagline">{item.tagline}</div>
            <div className="vt-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: "6px" }}>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              {item.badge}
            </div>
            <div className="vt-location">{item.location}</div>
          </div>

          {/* Carte Principale */}
          <div className="vt-content">
            <GlassCard className="vt-card">
              <h3 className="vt-title">{item.title}</h3>
              <p className="vt-desc">{item.description}</p>
            </GlassCard>
          </div>
        </div>
      ))}

      <style dangerouslySetInnerHTML={{
        __html: `
        .value-timeline {
          display: flex;
          flex-direction: column;
          width: 100%;
          max-width: 900px;
          margin: 4rem auto 2rem auto;
          position: relative;
        }

        .vt-item {
          display: flex;
          gap: 2rem;
          position: relative;
          min-height: 150px;
        }

        .vt-track {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 40px;
          flex-shrink: 0;
        }

        .vt-dot {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 4px solid #2ecc71; /* Vert Tech */
          background: #fff;
          z-index: 2;
          box-shadow: 0 0 0 4px rgba(46, 204, 113, 0.1);
        }

        .vt-line {
          width: 2px;
          flex-grow: 1;
          background: rgba(0, 0, 0, 0.08);
          margin-top: 4px;
          margin-bottom: 4px;
        }

        .vt-meta {
          width: 200px;
          flex-shrink: 0;
          padding-top: 2px;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .vt-tagline {
          font-weight: 800;
          color: #111;
          font-size: 1.1rem;
        }

        .vt-badge {
          display: inline-flex;
          align-items: center;
          background: rgba(0,0,0,0.04);
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 700;
          color: #555;
          width: fit-content;
          border: 1px solid rgba(0,0,0,0.05);
        }

        .vt-location {
          font-size: 0.85rem;
          color: #888;
          font-weight: 500;
        }

        .vt-content {
          flex-grow: 1;
          padding-bottom: 4rem;
        }

        .vt-card {
          padding: 2rem;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.6) !important;
          box-shadow: 0 10px 30px rgba(0,0,0,0.03) !important;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .vt-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.06) !important;
        }

        .vt-title {
          font-size: 1.4rem;
          font-weight: 800;
          color: #111;
          margin-bottom: 1rem;
          letter-spacing: -0.5px;
        }

        .vt-desc {
          font-size: 1.05rem;
          line-height: 1.7;
          color: #444;
        }

        /* RESPONSIVE MOBILE */
        @media (max-width: 768px) {
          .vt-item {
            flex-direction: column;
            gap: 1rem;
          }
          
          .vt-track {
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
          }

          .vt-line {
            height: 100%;
          }

          .vt-meta {
            padding-left: 50px; /* Espace pour la ligne */
            width: 100%;
            margin-bottom: 0.5rem;
          }

          .vt-content {
            padding-left: 50px;
            padding-bottom: 3rem;
          }
        }
      `}} />
    </div>
  );
}
