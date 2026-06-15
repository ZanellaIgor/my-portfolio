'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';
import { Tabs, TabsList, TabsTrigger } from '../ui/tabs';
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  Layers,
} from 'lucide-react';
import Image from 'next/image';
import { Project } from '@/interfaces/project';
import { projects } from '@/data/project';
import { profile } from '@/data/profile';
import { useReducedMotion } from '@/hooks/use-reduced-motion';
import { getProjectRepoLinks } from '@/lib/project-repos';

function ImageCarousel({ images, alt }: { images: string[]; alt: string }) {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((c) => (c - 1 + images.length) % images.length);
  };
  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((c) => (c + 1) % images.length);
  };

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft')
        setCurrent((c) => (c - 1 + images.length) % images.length);
      if (e.key === 'ArrowRight') setCurrent((c) => (c + 1) % images.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox, images.length]);

  return (
    <>
      <div
        className="relative h-64 group cursor-zoom-in"
        onClick={() => setLightbox(true)}
      >
        <div className="relative h-full overflow-hidden rounded-md">
          {images.map((src, i) => (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-300 ${i === current ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
              <Image
                src={src}
                alt={`${alt} — ${i + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Imagem anterior"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/70 hover:bg-background/90 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={next}
              aria-label="Próxima imagem"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/70 hover:bg-background/90 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrent(i);
                  }}
                  aria-label={`Ir para imagem ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition-colors ${i === current ? 'bg-white' : 'bg-white/40'}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <Dialog open={lightbox} onOpenChange={setLightbox}>
        <DialogContent
          style={{
            position: 'fixed',
            inset: 0,
            left: 0,
            top: 0,
            transform: 'none',
            maxWidth: '100vw',
            width: '100vw',
            height: '100vh',
            padding: 0,
            border: 'none',
            borderRadius: 0,
            background: 'rgba(0,0,0,0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            ['--tw-enter-scale' as string]: '1',
            ['--tw-enter-translate-x' as string]: '0%',
            ['--tw-enter-translate-y' as string]: '0%',
            ['--tw-exit-scale' as string]: '1',
            ['--tw-exit-translate-x' as string]: '0%',
            ['--tw-exit-translate-y' as string]: '0%',
          }}
        >
          <DialogTitle className="sr-only">Visualizar imagem</DialogTitle>

          {images.length > 1 && (
            <>
              <button
                onClick={prev}
                aria-label="Imagem anterior"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={next}
                aria-label="Próxima imagem"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          <div className="relative w-[90vw] h-[85vh]">
            <Image
              src={images[current]}
              alt={`${alt} — ${current + 1}`}
              fill
              className="object-contain"
            />
          </div>

          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Ir para imagem ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition-colors ${i === current ? 'bg-white' : 'bg-white/40'}`}
                />
              ))}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

function ProjectRepoIconLinks({
  projectTitle,
  links,
}: {
  projectTitle: string;
  links: ReturnType<typeof getProjectRepoLinks>;
}) {
  if (links.length === 0) return null;

  return (
    <>
      {links.map((link) => (
        <Button key={link.url} variant="ghost" size="icon" asChild>
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${link.label} — ${projectTitle}`}
            title={link.label}
          >
            <Github className="h-4 w-4" />
          </a>
        </Button>
      ))}
    </>
  );
}

function ProjectRepoButtonLinks({
  projectTitle,
  links,
}: {
  projectTitle: string;
  links: ReturnType<typeof getProjectRepoLinks>;
}) {
  if (links.length === 0) return null;

  return (
    <>
      {links.map((link) => (
        <Button key={link.url} variant="outline" asChild>
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${link.label} — ${projectTitle}`}
          >
            <Github className="mr-2 h-4 w-4" />
            {link.label}
          </a>
        </Button>
      ))}
    </>
  );
}

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  const reducedMotion = useReducedMotion();
  const imageClassName = [
    'object-cover transition-transform duration-300',
    !reducedMotion && 'group-hover:scale-105',
  ]
    .filter(Boolean)
    .join(' ');
  const repoLinks = getProjectRepoLinks(project);

  return (
    <Card className="card-interactive h-full flex flex-col overflow-hidden group">
      <div className="relative w-full h-48">
        <Image
          src={project.image}
          alt={`Imagem do projeto ${project.title}`}
          fill
          className={imageClassName}
        />
      </div>
      <CardHeader>
        <CardTitle className="font-heading text-lg">{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={onOpen}>
          <Layers className="mr-2 h-4 w-4" />
          Detalhes
        </Button>
        <div className="flex gap-2">
          {project.demoUrl && (
            <Button variant="ghost" size="icon" asChild>
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Abrir demo de ${project.title}`}
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}
          <ProjectRepoIconLinks
            projectTitle={project.title}
            links={repoLinks}
          />
        </div>
      </CardFooter>
    </Card>
  );
}

function ProjectModalBody({ project }: { project: Project }) {
  const repoLinks = getProjectRepoLinks(project);

  return (
    <>
      <div className="overflow-y-auto p-4 space-y-4 flex-1">
        <ImageCarousel
          images={project.images ?? [project.image]}
          alt={`Imagem do projeto ${project.title}`}
        />

        <section>
          <h4 className="font-medium mb-2">O Desafio</h4>
          <p className="text-sm text-muted-foreground">
            {project.details.challenge}
          </p>
        </section>

        <section>
          <h4 className="font-medium mb-2">A Solução</h4>
          <p className="text-sm text-muted-foreground">
            {project.details.solution}
          </p>
        </section>

        <section>
          <h4 className="font-medium mb-2">Funcionalidades</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            {project.details.features.map((feature, i) => (
              <li key={i} className="flex items-start">
                <span className="text-highlight mr-2">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="flex flex-wrap gap-3 p-4 border-t">
        {project.demoUrl && (
          <Button asChild>
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Ver Demo
            </a>
          </Button>
        )}
        <ProjectRepoButtonLinks
          projectTitle={project.title}
          links={repoLinks}
        />
      </div>
    </>
  );
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  const filteredProjects = projects.filter((project) =>
    activeTab === 'all' ? true : project.category === activeTab,
  );

  return (
    <section id="projects" className="py-20" aria-label="Portfólio de projetos">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading mb-2">Projetos</h2>
          <p className="section-intro mx-auto">
            {profile.projectsSectionDescription}
          </p>
        </motion.div>

        <Tabs defaultValue="all" onValueChange={setActiveTab}>
          <TabsList className="flex flex-wrap justify-center gap-2 mb-8">
            <TabsTrigger value="all">Todos</TabsTrigger>
            <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
          </TabsList>
        </Tabs>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <div className="grid md:grid-cols-2 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: (i: number) => ({
                    opacity: 1,
                    y: 0,
                    transition: { delay: i * 0.1 },
                  }),
                }}
              >
                <ProjectCard
                  project={project}
                  onOpen={() => {
                    setSelectedProject(project);
                    setIsOpen(true);
                  }}
                />
              </motion.div>
            ))}
          </div>

          <DialogContent className="w-full max-w-5xl max-h-[95vh] p-0">
            <div className="flex flex-col h-[90vh]">
              <DialogHeader className="p-4 border-b">
                <DialogTitle>
                  {selectedProject?.title ?? 'Detalhes do projeto'}
                </DialogTitle>
                {selectedProject && (
                  <DialogDescription>
                    {selectedProject.description}
                  </DialogDescription>
                )}
              </DialogHeader>

              {selectedProject && (
                <ProjectModalBody
                  key={selectedProject.id}
                  project={selectedProject}
                />
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
