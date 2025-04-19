import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Skills } from '@/components/sections/skills';
import { Projects } from '@/components/sections/projects';
import { Experience } from '@/components/sections/experience';

import { Contact } from '@/components/sections/contact';
import { Header } from '@/components/sections/header';
import { Footer } from '@/components/sections/footer';
import { ScrollToTop } from '@/components/sections/scroll-to-top';
import Education from '@/components/sections/education';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
