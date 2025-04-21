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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background font-sans antialiased')}>
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
