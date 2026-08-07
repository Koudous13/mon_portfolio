---
status: final
updated: 2026-08-05
---
# EXPERIENCE.md : Portfolio "The Process"

## 1. Foundation
- **Form-factor:** Web Application adaptative (Mobile-first en logique, mais l'expérience "Hero" est Desktop/Tablet).
- **UI System:** CSS sur mesure (Vanilla ou Tailwind customisé) pour obtenir le rendu "Glassmorphism" exigeant de {DESIGN.md}.
- **Core Engine:** Application monopage (SPA) avec hydratation dynamique de l'URL au scroll.

## 2. Information Architecture (IA) & SEO
- **One-Page Scroll:** Tout le contenu (les 13 étapes + intro/outro) est accessible verticalement sur une seule page physique.
- **SEO Dynamique:** Bien qu'il n'y ait pas de "menu complexe", le scroll intercepte l'API History du navigateur pour mettre à jour l'URL (ex: `/etape/architecture`, `/etape/deploiement`). 
- **Objectif:** Permettre une indexation granulaire par Google (JSON-LD et VideoSitemap pour chaque capsule) tout en gardant une navigation sans clic pour l'utilisateur.

## 3. Voice and Tone
- **Cible:** Sarah (Recruteuse Tech / CTO).
- **Ton:** Professionnel, assuré, analytique mais concis. Le portfolio "montre" (Show, don't tell).
- **GEO-Smart:** Le texte s'adapte dynamiquement à la géolocalisation (Edge Computing) pour rendre l'approche ultra-personnalisée (ex: "Disponible à Paris").

## 4. Interaction Primitives & State Patterns
- **Split-Screen (Desktop) :** L'écran est divisé. Le défilement de la page pilote le contenu à droite. À gauche, le lecteur vidéo reste fixé (sticky) et change dynamiquement de source avec une transition fondue lorsque l'étape active change à l'écran. Zéro-Layout-Shift via miniatures `BlurHash`.

## 5. Responsive & Platform (Mobile)
- Le layout bascule sur le **Dynamic Viewport** :
  - **Vidéo :** Le lecteur vidéo est épinglé en haut de l'écran (Sticky, 40vh). Il change dynamiquement au scroll.
  - **Cartes :** Les cartes de texte défilent dans la zone inférieure, sans chevaucher la vidéo, assurant une parfaite lisibilité sans effet "TikTok".


## 6. Accessibility Floor
- Bien que le contraste du texte sur le verre soit un défi, l'utilisation des tokens `{colors.textPrimary}` et du flou lourd `{components.glassCard.backdropFilter}` doit garantir un ratio lisible.
- Chaque vidéo dispose d'un `.VTT` caché pour le SEO, qui sert également de transcription pour les lecteurs d'écran.

## 7. Key Flows
### Le parcours de Sarah (CTO)
1. **L'Accroche :** Sarah atterrit sur la page via LinkedIn. L'URL est propre. Une typo géante l'invite à scroller.
2. **Le Déclic (Étape 0) :** Elle commence à scroller. Le premier arrière-plan vidéo s'anime de manière fluide. Elle comprend immédiatement que le défilement contrôle la timeline. 
3. **L'Ascension :** L'URL change (`/etape/01-prd`, etc.). Elle fait défiler le texte. La vidéo fixe se met à jour élégamment via une transition (Split-Screen ou Dynamic Viewport) pour montrer *exactement* le passage correspondant à la carte lue. Impressionnée par le niveau technique et le rendu Premium.
4. **La Conclusion :** En bas de page, après les 13 étapes, un résumé percutant avec le contexte géographique injecté (GEO-Smart) et un bouton "Télécharger le CV" lui fait terminer son voyage par une action claire.
