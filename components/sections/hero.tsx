'use client';

import { Button } from '../ui/button';
import { ArrowDown, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import {
  getScrollBehavior,
  useReducedMotion,
} from '@/hooks/use-reduced-motion';

function getHeroMotionProps(reducedMotion: boolean, delay = 0) {
  if (reducedMotion) {
    return {
      initial: { opacity: 1, y: 0 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0 },
    };
  }
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ...(delay > 0 ? { delay } : {}) },
  };
}

export function Hero() {
  const reducedMotion = useReducedMotion();

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: getScrollBehavior(reducedMotion),
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_55%_45%_at_50%_30%,rgba(var(--primary-rgb),0.10),transparent_65%)]"
      />

      <div className="container max-w-3xl">
        <div className="flex flex-col items-center text-center">
          <motion.div {...getHeroMotionProps(reducedMotion)}>
            <h1 className="font-heading text-hero font-bold tracking-tight text-balance">
              Olá, eu sou{' '}
              <span className="text-primary">{profile.name}.</span>
            </h1>
          </motion.div>

          <motion.div {...getHeroMotionProps(reducedMotion, 0.1)}>
            <h2 className="mt-4 font-heading text-lead font-semibold text-foreground">
              {profile.headline}
            </h2>
            <p className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
              {profile.tagline}
            </p>
          </motion.div>

          <motion.p
            {...getHeroMotionProps(reducedMotion, 0.2)}
            className="mt-6 max-w-2xl text-body-lg text-muted-foreground text-pretty"
          >
            {profile.shortBio}
          </motion.p>

          <motion.div
            {...getHeroMotionProps(reducedMotion, 0.3)}
            className="mt-9 flex flex-wrap justify-center gap-3"
          >
            <Button asChild size="lg" className="text-base">
              <a href="#contact">Entre em contato</a>
            </Button>
            <Button variant="outline" size="lg" asChild className="text-base">
              <a href="#projects">Ver projetos</a>
            </Button>
          </motion.div>

          <motion.div
            {...getHeroMotionProps(reducedMotion, 0.4)}
            className="mt-7 flex justify-center gap-1"
          >
            <Button variant="ghost" size="icon" asChild>
              <a
                href={profile.urls.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href={profile.urls.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={reducedMotion ? undefined : { y: [0, 8, 0] }}
        transition={
          reducedMotion
            ? undefined
            : { duration: 2.4, repeat: Infinity, ease: 'easeInOut' }
        }
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollToNextSection}
          aria-label="Rolar para baixo"
        >
          <ArrowDown className="h-6 w-6" />
        </Button>
      </motion.div>
    </section>
  );
}
