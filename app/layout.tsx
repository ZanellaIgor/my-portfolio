import './globals.css';
import type React from 'react';
import type { Metadata, Viewport } from 'next';

import { cn } from '../lib/utils';
import { fontSans } from '@/lib/fonts';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { profile } from '@/data/profile';

const ogImageUrl = `${profile.urls.site}${profile.ogImage}`;

export const metadata: Metadata = {
  title: profile.metaTitle,
  description: profile.metaDescription,
  applicationName: profile.applicationName,
  keywords: [...profile.seoKeywords],
  alternates: {
    canonical: profile.urls.site,
  },
  openGraph: {
    title: profile.metaTitle,
    description: profile.metaDescription,
    url: profile.urls.site,
    siteName: profile.applicationName,
    locale: 'pt_BR',
    type: 'website',
    images: [{ url: ogImageUrl, alt: `Foto de ${profile.name}` }],
  },
  twitter: {
    card: 'summary',
    title: profile.metaTitle,
    description: profile.metaDescription,
    images: [ogImageUrl],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#eef1f8' },
    { media: '(prefers-color-scheme: dark)', color: '#0d1018' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={cn(fontSans.variable)}
    >
      <body className={cn(fontSans.className, 'min-h-screen bg-background')}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Pular para o conteúdo
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: profile.name,
              jobTitle: profile.jobTitleSchema,
              url: profile.urls.site,
              sameAs: [profile.urls.github, profile.urls.linkedin],
              address: {
                '@type': 'PostalAddress',
                addressLocality: profile.location.city,
                addressRegion: profile.location.state,
                addressCountry: profile.location.country,
              },
              email: profile.email,
              description: profile.schemaDescription,
              knowsAbout: [...profile.knowsAbout],
            }),
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
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
