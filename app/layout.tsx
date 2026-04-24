import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Qunigma | AI-Native Active Defense dla banków Tier-1 UE',
  description: 'Qunigma neutralizuje ataki NHI, Memory Poisoning i All Green Fraud w czasie poniżej 2ms. DORA, AI Act i NIS2 aligned. EU-sovereign — brak CLOUD Act.',
  openGraph: {
    title: 'Qunigma | MTTAV <2ms — Active AI Defense',
    description: 'Platforma ochrony AI-native dla europejskich banków Tier-1. DORA/AI Act compliant. Zbudowane w UE.',
    type: 'website',
    locale: 'pl_PL',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} ${playfair.variable} font-sans antialiased bg-black`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
