import React from "react";

export default function ProblemToSolutionVisual() {
  return (
    <div className="ptsv-container">
      {/* Téléphone Vides (Le Problème) */}
      <div className="phone-mockup blank-phone">
        <div className="phone-notch"></div>
        <div className="phone-screen">
          <div className="blank-state-content">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <p>Désordre, perte de données...</p>
          </div>
        </div>
      </div>

      {/* Flèche de transition */}
      <div className="transition-arrow">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="url(#gradient-arrow)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <defs>
            <linearGradient id="gradient-arrow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
              <stop offset="100%" stopColor="#4ade80" />
            </linearGradient>
          </defs>
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </div>

      {/* Téléphone Complet (La Solution - Vigie) */}
      <div className="phone-mockup vigie-phone">
        <div className="phone-notch"></div>
        <div className="phone-screen vigie-ui">
          
          {/* Faux Header Vigie */}
          <div className="v-header">
            <span className="v-logo">VIGIE</span>
            <div className="v-avatar"></div>
          </div>

          {/* Faux Dashboard */}
          <div className="v-dashboard">
            <div className="v-card v-main-card">
              <div className="v-ring-container">
                <svg viewBox="0 0 36 36" className="circular-chart green">
                  <path className="circle-bg"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path className="circle"
                    strokeDasharray="60, 100"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <text x="18" y="20.35" className="percentage">580h</text>
                  <text x="18" y="25" className="sub-percentage">/ 964h</text>
                </svg>
              </div>
              <p className="v-status">Quota Légal Actif</p>
            </div>

            <div className="v-row">
              <div className="v-card v-small-card">
                <div className="v-icon">🍔</div>
                <span>McDo</span>
                <strong>120h</strong>
              </div>
              <div className="v-card v-small-card">
                <div className="v-icon">📦</div>
                <span>Amazon</span>
                <strong>460h</strong>
              </div>
            </div>
            
            <div className="v-button">
              Exporter PDF (Préfecture)
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
