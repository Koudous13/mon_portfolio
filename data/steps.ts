export interface Step {
  id: string;
  title: string;
  content: string;
  videoUrl?: string;
  imageUrl?: string;
  blurhash: string;
  vttUrl?: string;
}

export const stepsData: Step[] = [
  {
    id: "00",
    title: "Étape 00 : Le Problème (Étude de cas réélle)",
    content: "En France, les étudiants étrangers sont limités à <span class=\"highlight-marker\">964 heures de travail par an</span> sous peine de perdre leur titre de séjour (le problème). Voici <strong class=\"text-gradient\">Vigie</strong> (la solution) : un <span class=\"highlight-marker\">SaaS sur abonnement mensuel</span> qui suit le cumul d'heures en temps réel sur plusieurs jobs, alerte avant le dépassement, et génère un export légal pour la préfecture.",
    imageUrl: "/vigie_dual_phones.png",
    blurhash: "L9D]l=~oD$+~?wELNGE1_4M|s:oL",
    vttUrl: "/captions/step-00.vtt"
  },
  {
    id: "01",
    title: "Étape 01 : PRD (Product Requirements Document)",
    content: "Transformation de l'idée en spécifications fonctionnelles claires avec l'agent bmad-prd. C'est la fondation absolue du projet.",
    videoUrl: "https://ay5xeztrv3ajtcu7.public.blob.vercel-storage.com/a3b4e7a2a615bcbc237d230b022814ff.mp4",
    blurhash: "L9D]l=~oD$+~?wELNGE1_4M|s:oL",
    vttUrl: "/captions/step-01.vtt"
  },
  {
    id: "02",
    title: "Étape 02 : UX Design",
    content: "Une fois le PRD défini, conception de l'expérience utilisateur avec bmad-ux pour valider les parcours et l'ergonomie.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    blurhash: "L9D]l=~oD$+~?wELNGE1_4M|s:oL",
    vttUrl: "/captions/step-02.vtt"
  },
  {
    id: "03",
    title: "Étape 03 : Architecture",
    content: "Définition de l'architecture technique globale (Stack, DB, Edge) avec bmad-architecture avant l'écriture du moindre code.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    blurhash: "L9D]l=~oD$+~?wELNGE1_4M|s:oL",
    vttUrl: "/captions/step-03.vtt"
  },
  {
    id: "04",
    title: "Étape 04 : Epics and Stories",
    content: "Découpage du projet en User Stories pensées comme des 'Vertical Slices' (de la base de données au frontend).",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    blurhash: "L9D]l=~oD$+~?wELNGE1_4M|s:oL",
    vttUrl: "/captions/step-04.vtt"
  },
  {
    id: "05",
    title: "Étape 05 : Implementation Readiness",
    content: "Audit croisé rigoureux pour vérifier que le PRD, l'UX et l'Architecture sont parfaitement alignés.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    blurhash: "L9D]l=~oD$+~?wELNGE1_4M|s:oL",
    vttUrl: "/captions/step-05.vtt"
  },
  {
    id: "06",
    title: "Étape 06 : Sprint Planning",
    content: "Organisation stratégique de l'ordre de développement des User Stories pour optimiser le temps et les dépendances.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    blurhash: "L9D]l=~oD$+~?wELNGE1_4M|s:oL",
    vttUrl: "/captions/step-06.vtt"
  },
  {
    id: "07",
    title: "Étape 07 : Create Story",
    content: "Préparation et contextualisation minutieuse de la tâche (Story) avant de lancer l'implémentation.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    blurhash: "L9D]l=~oD$+~?wELNGE1_4M|s:oL",
    vttUrl: "/captions/step-07.vtt"
  },
  {
    id: "08",
    title: "Étape 08 : Validate Story",
    content: "Validation de la préparation de la tâche pour éviter toute ambiguïté ou perte de temps pendant le développement.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    blurhash: "L9D]l=~oD$+~?wELNGE1_4M|s:oL",
    vttUrl: "/captions/step-08.vtt"
  },
  {
    id: "09",
    title: "Étape 09 : Dev Story",
    content: "Le développement effectif de bout en bout (Frontend & Backend en même temps) selon l'architecture définie.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    blurhash: "L9D]l=~oD$+~?wELNGE1_4M|s:oL",
    vttUrl: "/captions/step-09.vtt"
  },
  {
    id: "10",
    title: "Étape 10 : Code Review",
    content: "Revue de code critique et Adversarial Review pour sécuriser les failles (injections SQL, mauvaise gestion d'état).",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    blurhash: "L9D]l=~oD$+~?wELNGE1_4M|s:oL",
    vttUrl: "/captions/step-10.vtt"
  },
  {
    id: "11",
    title: "Étape 11 : QA Automation Test",
    content: "Génération de tests automatisés (End-to-End) pour garantir la robustesse des Vertical Slices.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
    blurhash: "L9D]l=~oD$+~?wELNGE1_4M|s:oL",
    vttUrl: "/captions/step-11.vtt"
  },
  {
    id: "12",
    title: "Étape 12 : NFR Evidence Audit",
    content: "Tests de sécurité et d'infrastructure intensifs (scalabilité, performance, Non-Functional Requirements).",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    blurhash: "L9D]l=~oD$+~?wELNGE1_4M|s:oL",
    vttUrl: "/captions/step-12.vtt"
  },
  {
    id: "13",
    title: "Étape 13 : Retrospective",
    content: "Bilan post-projet pour capitaliser sur l'expérience acquise et perfectionner les futurs workflows.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarRouge.mp4",
    blurhash: "L9D]l=~oD$+~?wELNGE1_4M|s:oL",
    vttUrl: "/captions/step-13.vtt"
  }
];
