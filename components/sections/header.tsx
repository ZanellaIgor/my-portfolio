'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ModeToggle } from './mode-toggle';
import { Button } from '../ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useMobile } from '@/hooks/use-mobile';

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Find active section
      const sections = navItems.map((item) => item.href.substring(1));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (!element) return false;

        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

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
          className="text-xl font-bold tracking-tight hover:text-primary transition-colors"
        >
          <span className="text-primary">Dev</span>Portfolio
        </Link>

        {isMobile ? (
          <>
            <div className="flex items-center gap-2">
              <ModeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMobileMenu}
                aria-label="Menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>

            {mobileMenuOpen && (
              <div className="fixed inset-0 top-[57px] bg-background z-40 p-4">
                <nav className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={closeMobileMenu}
                      className={cn(
                        'px-4 py-3 rounded-md transition-colors hover:bg-muted',
                        activeSection === item.href.substring(1) &&
                          'bg-muted font-medium text-primary'
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center gap-4">
            <nav className="flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'px-3 py-2 rounded-md text-sm transition-colors hover:text-primary',
                    activeSection === item.href.substring(1) &&
                      'font-medium text-primary'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <ModeToggle />
          </div>
        )}
      </div>
    </header>
  );
}
