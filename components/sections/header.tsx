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
          className="w-[280px] border-l border-border bg-background p-0"
        >
          <SheetHeader className="p-4 border-b border-border">
            <SheetTitle className="text-left font-heading">
              <span className="text-primary">Dev</span>Igor
            </SheetTitle>
            <SheetClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
              <span className="sr-only">Fechar</span>
            </SheetClose>
          </SheetHeader>
          <nav className="flex flex-col">
            {navItems.map(({ name, href }) => (
              <SheetClose key={name} asChild>
                <Link
                  href={href}
                  onClick={handleNavItemClick}
                  aria-current={
                    activeSection === href.slice(1) ? 'page' : undefined
                  }
                  className={cn(
                    'px-6 py-4 transition-colors hover:bg-accent border-b border-border flex items-center',
                    activeSection === href.slice(1) &&
                      'bg-accent font-medium text-primary'
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
            aria-current={
              activeSection === href.slice(1) ? 'page' : undefined
            }
            className={cn(
              'px-3 py-2 rounded-md text-sm transition-colors hover:bg-accent hover:text-primary',
              activeSection === href.slice(1) &&
                'bg-accent font-medium text-primary'
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
          <div className="font-heading text-xl font-bold tracking-tight">
            <span className="text-primary">Dev</span>Igor
          </div>
          <div className="w-10 h-10"></div>
        </div>
      </header>
    );
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 py-4 transition-[background-color,border-color,box-shadow] duration-300',
        isScrolled
          ? 'border-b border-border/60 bg-background/95 shadow-sm'
          : 'border-b border-transparent bg-transparent'
      )}
    >
      <div className="container flex items-center justify-between">
        <Link
          href="#hero"
          className="font-heading text-xl font-bold tracking-tight transition-colors hover:text-primary"
        >
          <span className="text-primary">Dev</span>Igor
        </Link>
        <div className="flex items-center gap-2">
          {isMobile ? renderMobileNav() : renderDesktopNav()}
        </div>
      </div>
    </header>
  );
}
