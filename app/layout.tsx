import type React from 'react';
import type { Metadata } from 'next';

import './globals.css';

import { cn } from '../lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Portfólio Profissional | Igor Zanella',
  description:
    'Portfólio profissional de desenvolvedor web full stack, destacando projetos, habilidades e experiência.',
  applicationName: 'Portfólio Igor Zanella',
  keywords: [
    'desenvolvedor web',
    'full stack',
    'React',
    'Next.js',
    'Node.js',
    'portfólio',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background font-sans antialiased')}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Igor Zanella',
              jobTitle: 'Desenvolvedor Full Stack',
             // url: 'https://igorzanella.com.br', // Substitua pela sua URL real se for diferente
              sameAs: [
                'https://github.com/ZanellaIgor',
                'https://www.linkedin.com/in/zanella-igor',
              ],
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Caxias do Sul',
                addressRegion: 'RS',
                addressCountry: 'BR',
              },
              email: 'igorznll@hotmail.com',
              description:
                'Desenvolvedor Web Full Stack com experiência em React, Next.js e Node.js.',
              knowsAbout: [
                'React',
                'Next.js',
                'TypeScript',
                'Node.js',
                'Web Development',
                'PostgreSQL',
                'TailwindCSS',
              ],
            }),
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
          themes={['light', 'dark']}
        >
          <Toaster />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
