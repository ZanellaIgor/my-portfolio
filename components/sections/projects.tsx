'use client';

import { useState } from 'react';
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
import { ExternalLink, Github, Layers } from 'lucide-react';
import Image from 'next/image';
import { Project } from '@/interfaces/project';
import { projects } from '@/data/project';

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  return (
    <Card className="h-full flex flex-col overflow-hidden group">
      <div className="relative w-full h-48">
        <Image
          src={project.image}
          alt={`Imagem do projeto ${project.title}`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
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
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}
          {project.repoUrl && (
            <Button variant="ghost" size="icon" asChild>
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}

function ProjectModal({ project }: { project: Project }) {
  return (
    <DialogContent
      className="w-full max-w-5xl max-h-[95vh] p-0"
      role="dialog"
      aria-labelledby="project-title"
    >
      <div className="flex flex-col h-[90vh]">
        <DialogHeader className="p-4 border-b">
          <DialogTitle id="project-title">{project.title}</DialogTitle>
          <DialogDescription>{project.description}</DialogDescription>
        </DialogHeader>

        {/* Conteúdo rolável */}
        <div className="overflow-y-auto p-4 space-y-4 flex-1">
          <div className="relative h-64">
            <Image
              src={project.image}
              alt={`Imagem do projeto ${project.title}`}
              fill
              className="object-cover rounded-md"
            />
          </div>

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
                  <span className="text-primary mr-2">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Rodapé fixo com botões */}
        <div className="flex gap-4 p-4 border-t">
          {project.demoUrl && (
            <Button asChild>
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Ver Demo
              </a>
            </Button>
          )}
          {project.repoUrl && (
            <Button variant="outline" asChild>
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                Código Fonte
              </a>
            </Button>
          )}
        </div>
      </div>
    </DialogContent>
  );
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  const filteredProjects = projects.filter((project) =>
    activeTab === 'all' ? true : project.category === activeTab
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
          <h2 className="text-3xl font-bold tracking-tight mb-2">Projetos</h2>
          <p className="text-muted-foreground">
            Conheça alguns dos meus trabalhos mais recentes
          </p>
        </motion.div>

        <Tabs defaultValue="all" onValueChange={setActiveTab}>
          <TabsList className="flex flex-wrap justify-center gap-2 mb-8">
            <TabsTrigger value="all">Todos</TabsTrigger>
            <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
          </TabsList>
        </Tabs>

        <Dialog
          open={isOpen}
          onOpenChange={(open) => {
            setIsOpen(open);
            if (!open) setSelectedProject(null);
          }}
        >
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

          {selectedProject && <ProjectModal project={selectedProject} />}
        </Dialog>
      </div>
    </section>
  );
}
