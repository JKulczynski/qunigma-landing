import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Playfair_Display } from 'next/font/google';
import { headers } from 'next/headers';
import Script from 'next/script';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  metadataBase: new URL('https://qunigma.ai'),
  title: 'Qunigma | AI-Native Active Defense. MTTAV <2ms.',
  description: 'Qunigma neutralizuje ataki NHI, Memory Poisoning i All Green Fraud w czasie poniżej 2ms. DORA, AI Act i NIS2 aligned. EU-sovereign, brak CLOUD Act.',
  openGraph: {
    title: 'Qunigma | MTTAV <2ms, Active AI Defense',
    description: 'Platforma active cyber defense AI-native. DORA/AI Act compliant. EU-sovereign, zbudowane w UE.',
    type: 'website',
    locale: 'pl_PL',
    alternateLocale: 'en_US',
    url: 'https://qunigma.ai',
    siteName: 'Qunigma',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Qunigma' }],
  },
  robots: { index: true, follow: true },
  twitter: {
    card: 'summary_large_image',
    title: 'Qunigma | AI-Native Active Defense. MTTAV <2ms.',
    description: 'Platforma active cyber defense AI-native. DORA/AI Act compliant. EU-sovereign, zbudowane w UE.',
    site: '@qunigma_ai',
    images: ['/og-image.png'],
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') || '';
  const lang = pathname.startsWith('/en') ? 'en' : 'pl';

  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <Script
          id="cookieyes"
          src="https://cdn-cookieyes.com/client_data/0c0a3c066b2cd897529a4d864c788510/script.js"
          strategy="beforeInteractive"
        />
        <Script id="gtm-head" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N24HLF4X');`}
        </Script>
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} ${playfair.variable} font-sans antialiased bg-black`} suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://qunigma.ai/#organization",
            "name": "Qunigma",
            "url": "https://qunigma.ai",
            "description": "AI-native active cyber defense platform. MTTAV under 2ms. EU-sovereign, DORA/AI Act/NIS2/CRA compliant.",
            "sameAs": [
              "https://twitter.com/qunigma_ai",
              "https://x.com/qunigma_ai"
            ],
            "areaServed": "EU",
            "knowsAbout": ["cybersecurity", "DORA compliance", "AI Act", "NHI security", "active defense", "LLM security"],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Qunigma Platform",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "MTTAV Engine", "description": "Active threat neutralization in under 2ms" }},
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Honeypot LLM", "description": "AI agent deception and threat intelligence" }},
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Memory Guard", "description": "AI model memory protection against poisoning" }},
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "NHI Security", "description": "Non-human identity governance and monitoring" }}
              ]
            }
          })}}
        />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N24HLF4X"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
