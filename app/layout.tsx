import type React from 'react';
import type { Metadata } from 'next';

import './globals.css';

import { ThemeProvider } from '../components/theme-provider';
import { cn } from '../lib/utils';

export const metadata: Metadata = {
  title: 'Portfólio Profissional | Desenvolvedor Full Stack',
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
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
