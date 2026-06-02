'use client';

import { useState, useEffect } from 'react';

import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import {
  getScrollBehavior,
  useReducedMotion,
} from '@/hooks/use-reduced-motion';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: getScrollBehavior(reducedMotion),
    });
  };

  return (
    <Button
      variant="secondary"
      size="icon"
      className={cn(
        'fixed bottom-6 right-6 z-40 rounded-full shadow-md transition-[opacity,transform] duration-300',
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10 pointer-events-none'
      )}
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      tabIndex={isVisible ? 0 : -1}
      aria-hidden={!isVisible}
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  );
}
