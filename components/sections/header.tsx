'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { ModeToggle } from './mode-toggle';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useMobile } from '@/hooks/use-mobile';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from '@/components/ui/sheet';

const navItems = [
  { name: 'Início', href: '#hero' },
  { name: 'Sobre', href: '#about' },
  { name: 'Habilidades', href: '#skills' },
  { name: 'Projetos', href: '#projects' },
  { name: 'Experiência', href: '#experience' },
  { name: 'Formação', href: '#education' },
  { name: 'Contato', href: '#contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [sheetOpen, setSheetOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const isMobile = useMobile();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 10);

          const current = navItems.find(({ href }) => {
            const section = document.getElementById(href.slice(1));
            if (!section) return false;
            const rect = section.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          });

          if (current) setActiveSection(current.href.slice(1));
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavItemClick = useCallback(() => setSheetOpen(false), []);

  const renderMobileNav = () => (
    <>
      <ModeToggle />
      <Button
        variant="ghost"
        size="icon"
        aria-label="Abrir menu"
        onClick={() => setSheetOpen(true)}
      >
        <Menu className="h-5 w-5" />
      </Button>

      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetContent
          side="right"
          className="w-[280px] border-l border-blue-900/20 bg-background/95 backdrop-blur-md p-0"
        >
          <SheetHeader className="p-4 border-b border-blue-900/20">
            <SheetTitle className="text-left">
              <span className="text-blue-500">Dev</span>Igor
            </SheetTitle>
            <SheetClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              <span className="sr-only">Fechar</span>
            </SheetClose>
          </SheetHeader>
          <nav className="flex flex-col">
            {navItems.map(({ name, href }) => (
              <SheetClose key={name} asChild>
                <Link
                  href={href}
                  onClick={handleNavItemClick}
                  className={cn(
                    'px-6 py-4 transition-colors hover:bg-blue-950/30 border-b border-blue-900/10 flex items-center',
                    activeSection === href.slice(1) &&
                      'bg-blue-950/40 font-medium text-blue-400'
                  )}
                >
                  {name}
                </Link>
              </SheetClose>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );

  const renderDesktopNav = () => (
    <>
      <nav className="flex items-center gap-1">
        {navItems.map(({ name, href }) => (
          <Link
            key={name}
            href={href}
            className={cn(
              'px-3 py-2 rounded-md text-sm transition-colors hover:text-blue-400',
              activeSection === href.slice(1) && 'font-medium text-blue-500'
            )}
          >
            {name}
          </Link>
        ))}
      </nav>
      <ModeToggle />
    </>
  );

  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 py-4">
        <div className="container flex items-center justify-between">
          <div className="text-xl font-bold tracking-tight">
            <span className="text-blue-500">Dev</span>Igor
          </div>
          <div className="w-10 h-10"></div>
        </div>
      </header>
    );
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-md py-2 shadow-sm'
          : 'bg-transparent py-4'
      )}
    >
      <div className="container flex items-center justify-between">
        <Link
          href="#hero"
          className="text-xl font-bold tracking-tight hover:text-blue-400 transition-colors"
        >
          <span className="text-blue-500">Dev</span>Igor
        </Link>
        <div className="flex items-center gap-2">
          {isMobile ? renderMobileNav() : renderDesktopNav()}
        </div>
      </div>
    </header>
  );
}
