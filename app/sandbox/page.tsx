import React from "react";
import ProblemToSolutionVisual from "../../components/ui/ProblemToSolutionVisual";
import Header from "../../components/ui/Header";

export default function SandboxPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#000', padding: '2rem' }}>
      <Header />
      <div style={{ marginTop: '100px', maxWidth: '1000px', margin: '0 auto' }}>
        <h1 style={{ color: '#fff', textAlign: 'center', marginBottom: '2rem' }}>Aperçu : Le Problème vs La Solution</h1>
        <ProblemToSolutionVisual />
      </div>
    </div>
  );
}
