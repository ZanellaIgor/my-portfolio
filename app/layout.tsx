import type React from 'react';
import type { Metadata } from 'next';

import './globals.css';

import { cn } from '../lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { profile } from '@/data/profile';

export const metadata: Metadata = {
  title: profile.metaTitle,
  description: profile.metaDescription,
  applicationName: profile.applicationName,
  keywords: [...profile.seoKeywords],
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
