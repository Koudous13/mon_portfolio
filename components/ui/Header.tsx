export default function Header() {
  return (
    <header style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      zIndex: 100,
      background: "rgba(255, 255, 255, 0.7)",
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",
      borderBottom: "1px solid rgba(255,255,255,0.4)",
      padding: "1rem clamp(1rem, 5vw, 2rem)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxSizing: "border-box"
    }}>
      <div style={{
        fontWeight: 900,
        fontSize: "1.2rem",
        letterSpacing: "-0.5px",
        color: "#111"
      }}>
        Koudous DAOUDA
      </div>

      <nav style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        {/* Navigation masquée sur très petit mobile, optionnelle */}
        <a href="#process" style={{
          textDecoration: "none",
          color: "#555",
          fontWeight: 600,
          fontSize: "0.95rem"
        }} className="hide-on-mobile">Le Processus</a>
        
        <a href="mailto:contact@example.com" style={{
          background: "#111",
          color: "#fff",
          padding: "0.6rem 1.2rem",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: 700,
          fontSize: "0.9rem"
        }}>Contact</a>
      </nav>
      
      <style>{`
        @media (max-width: 600px) {
          .hide-on-mobile {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
