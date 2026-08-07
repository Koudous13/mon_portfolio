---
status: final
updated: 2026-08-05
colors:
  background: "#fdfbfb"
  surface: "rgba(255, 255, 255, 0.4)"
  textPrimary: "#111111"
  textSecondary: "#444444"
  accent: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)"
typography:
  fontFamily: "'Inter', sans-serif"
  h1: "2.5rem to 3rem, -1px letter spacing, bold"
  body: "1.05rem to 1.1rem, 1.6 line height"
  mono: "monospace, 0.85rem"
rounded:
  card: "24px"
  snippet: "12px"
spacing:
  section: "4rem"
  cardPadding: "2.5rem"
components:
  glassCard:
    background: "{colors.surface}"
    backdropFilter: "blur(24px)"
    border: "1px solid rgba(255, 255, 255, 0.6)"
    boxShadow: "0 30px 60px rgba(0,0,0,0.08), inset 0 0 0 1px rgba(255,255,255,0.2)"
  codeSnippet:
    background: "rgba(255, 255, 255, 0.6)"
    border: "1px solid rgba(255, 255, 255, 0.8)"
---
# DESIGN.md : Portfolio "The Process"

## 1. Brand & Style
- **Aesthetic:** "2030 Design", ultra-premium "Apple-style", Light Mode exclusif, Glassmorphism.
- **Vibe:** L'effet "Wow" immédiat. Une masterclass technique épurée où la perfection des finitions (espacements, fluidité, typographie) frappe l'inconscient de l'utilisateur.
- **Purposeful Brightness:** Espaces extrêmement aérés, respirants, focalisant l'attention sur les médias (vidéos). Chaque pixel a une raison d'être.

## 2. Colors
- Le fond global est un gradient extrêmement léger.
- Les éléments en superposition (cartes) sont transparents pour laisser transparaître les vidéos.
- Les textes contrastent fortement pour assurer une excellente lisibilité malgré le fond dynamique.

## 3. Typography
- **Primary Font:** `Inter` (sans-serif géométrique, moderne et très lisible).
- La hiérarchie visuelle est assurée par le poids (Extra-Bold pour les titres, Regular/Medium pour le corps).

## 4. Layout & Spacing
- Le Layout principal sur Desktop est le **Split-Screen (50/50)** : La vidéo est fixée à gauche (sticky), et le contenu défile à droite. Sur Mobile, c'est le **Dynamic Viewport** : La vidéo reste épinglée en haut de l'écran, et les cartes de texte défilent en dessous.

## 5. Elevation & Depth
- **Glassmorphism profond :** Les cartes n'utilisent pas d'élévation par couleur unie, mais une combinaison de flou, d'une ombre douce et d'une bordure interne pour simuler une plaque de verre luxueuse.

## 6. Shapes
- Angles fortement arrondis : `24px` pour les cartes principales, `12px` pour les sous-éléments.

## 7. Do's and Don'ts
- **DO:** Maintenir un ratio extrêmement élevé d'espace vide (Whitespace is luxury).
- **DO:** Garder les contrastes textuels élevés par rapport au verre dépoli.
- **DON'T:** Utiliser des couleurs unies agressives.
- **DON'T:** Ajouter des ombres portées dures ou des animations saccadées.

## 8. Motion & Micro-interactions (The "Wow" Factor)
- **Spring Physics :** Toute animation (apparition de carte, survol de bouton) doit utiliser des courbes de bézier "Spring" (rebond doux et naturel, type iOS).
- **Fluidité 120fps :** Aucune saccade n'est tolérée. Les transitions de flou et d'opacité doivent être orchestrées à la milliseconde.
- **Micro-détails :** Le curseur de la souris ou le défilement doit donner une sensation de retour haptique visuel (ex: très léger zoom sur les cartes au survol).
