import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://koudousdaouda-portfolio.vercel.app'),
  title: {
    default: "Portfolio Koudous | Architecte Web Fullstack & Expert IA",
    template: "%s | Portfolio Koudous"
  },
  description: "Développeur web full stack et expert en automatisation IA. Découvrez 'The Process' : des livraisons 3x plus rapides, avec 99% de satisfaction client (4.8/5 sur Malt).",
  keywords: ["Développeur Web", "Architecte Fullstack", "Automatisation IA", "Expert IA", "Koudous Daouda", "Freelance Malt", "Next.js", "React"],
  authors: [{ name: "Koudous Daouda", url: "https://koudousdaouda-portfolio.vercel.app" }],
  creator: "Koudous Daouda",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://koudousdaouda-portfolio.vercel.app",
    title: "Portfolio Koudous | Architecte Web Fullstack & IA",
    description: "Expert en développement web full stack et automatisation IA. Livraison 3x plus rapide avec 99% de satisfaction.",
    siteName: "Portfolio Koudous",
    images: [{
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Portfolio Koudous - Architecte Web Fullstack & IA"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio Koudous | Architecte Web Fullstack & IA",
    description: "Expert en développement web full stack et automatisation IA. Livraison 3x plus rapide.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://koudousdaouda-portfolio.vercel.app',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://koudousdaouda-portfolio.vercel.app/#person",
      "name": "Koudous Daouda",
      "jobTitle": "Architecte Web Fullstack & Expert Automatisation IA",
      "description": "Koudous est un développeur web full stack et expert en automatisation de processus par IA. Il garantit des livraisons 3x plus rapides avec un taux de satisfaction de 99% (évalué 4.8/5 sur Malt).",
      "url": "https://koudousdaouda-portfolio.vercel.app",
      "sameAs": [
        "https://www.linkedin.com/in/koudous-daouda-84a95a3bb",
        "https://www.malt.com/profile/koudousdaouda1",
        "https://fr.malt.ch/profile/koudousdaouda1"
      ],
      "knowsAbout": ["Fullstack Web Development", "Next.js", "AI Automation", "Software Architecture", "Generative Engine Optimization"]
    },
    {
      "@type": "WebSite",
      "@id": "https://koudousdaouda-portfolio.vercel.app/#website",
      "url": "https://koudousdaouda-portfolio.vercel.app",
      "name": "Portfolio Koudous",
      "publisher": {
        "@id": "https://koudousdaouda-portfolio.vercel.app/#person"
      }
    },
    {
      "@type": "ProfilePage",
      "@id": "https://koudousdaouda-portfolio.vercel.app/#profilepage",
      "url": "https://koudousdaouda-portfolio.vercel.app",
      "isPartOf": {
        "@id": "https://koudousdaouda-portfolio.vercel.app/#website"
      },
      "about": {
        "@id": "https://koudousdaouda-portfolio.vercel.app/#person"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
