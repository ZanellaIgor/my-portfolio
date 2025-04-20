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
  DialogTrigger,
} from '../ui/dialog';
import { Tabs, TabsList, TabsTrigger } from '../ui/tabs';
import { ExternalLink, Github, Layers } from 'lucide-react';
import Image from 'next/image';

// Interface para tipagem
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
  category: 'fullstack' | 'frontend';
  details: {
    challenge: string;
    solution: string;
    features: string[];
  };
}

// Dados dos projetos
const projects: Project[] = [
  {
    id: 1,
    title: 'Gestor de Condomínios',
    description:
      'Sistema completo para administração de condomínios, com funcionalidades como avisos, manutenções, reservas, enquetes e painel administrativo.',
    image: '/condominium-admin.png',
    tags: [
      'React.js',
      'Material UI',
      'Nest.js',
      'Prisma',
      'PostgreSQL',
      'Docker',
      'TypeScript',
      'React Query',
      'React Hook Form',
      'Zod',
      'Zustand',
    ],
    demoUrl: 'https://exemplo.com',
    repoUrl: 'https://github.com/ZanellaIgor/CondominiumAdmin',
    category: 'fullstack',
    details: {
      challenge:
        'Criar uma solução escalável que facilitasse a comunicação e a gestão de múltiplos condomínios, com controle de acesso baseado em papéis (roles) e boa performance.',
      solution:
        'Divisão da aplicação em front-end e back-end com arquitetura modular. Backend em NestJS com autenticação via JWT, documentação Swagger e banco relacional com Prisma/PostgreSQL. Front-end em React/Next com gerenciamento de estado via Zustand e requisições assíncronas com React Query.',
      features: [
        'Painel administrativo com controle de usuários, apartamentos e espaços de reserva',
        'CRUD completo de avisos, manutenções, reservas e enquetes',
        'Controle de acesso baseado em roles (User, Admin, Master)',
        'Autenticação JWT com validação de dados',
        'API documentada com Swagger',
        'Frontend com formulários validados (React Hook Form + Zod)',
        'Experiência de uso fluída com React Query e Zustand',
        'Design responsivo utilizando Material UI',
      ],
    },
  },
  {
    id: 2,
    title: 'Dev Sushi',
    description:
      'Aplicação web de uma loja fictícia de sushi, com foco em UX moderna, formulário multi-etapas e integração com WhatsApp para envio de pedidos.',
    image: '/dev-sushi.png',
    tags: [
      'Next.js',
      'React',
      'Tailwind CSS',
      'Zod',
      'React Hook Form',
      'Shadcn-ui',
      'Zustand',
      'TypeScript',
    ],
    demoUrl: 'https://exemplo.com',
    repoUrl: 'https://github.com/ZanellaIgor/dev-sushi',
    category: 'frontend',
    details: {
      challenge:
        'Criar uma aplicação com interface moderna, responsiva e que proporcionasse uma jornada de compra simples e eficiente, com integração externa para envio de pedidos.',
      solution:
        'Utilização de componentes acessíveis com Shadcn-ui, gerenciamento de formulários com React Hook Form e validações com Zod. Implementado formulário multi-etapas com Zustand para controle de estado e envio automático de pedidos via WhatsApp.',
      features: [
        'Carrinho de compras funcional',
        'Formulário multi-etapas validado com Zod',
        'Envio de pedidos automatizado via WhatsApp',
        'Tema escuro e claro com persistência de preferência',
        'Layout responsivo e moderno com Tailwind CSS',
      ],
    },
  },
  {
    id: 3,
    title: 'Amigo Secreto - Sorteio Dinâmico',
    description:
      'Aplicação fullstack para criação de eventos de Amigo Secreto, com suporte a grupos, cadastro de participantes via CPF e acesso individual ao resultado do sorteio.',
    image: '/amigo-secreto.png',
    tags: [
      'Next.js',
      'React.js',
      'Tailwind CSS',
      'TypeScript',
      'Node.js',
      'Prisma',
      'Docker',
    ],
    demoUrl: 'https://exemplo.com',
    repoUrl: 'https://github.com/ZanellaIgor/amigo-secreto',
    category: 'fullstack',
    details: {
      challenge:
        'Criar um sistema completo e seguro para sorteios personalizados de Amigo Secreto, com acesso individual aos resultados e possibilidade de agrupamento dos participantes.',
      solution:
        'Desenvolvimento de um backend com Node.js, Prisma e Docker para persistência e segurança dos dados, e um frontend com Next.js e Tailwind CSS para uma experiência fluida. O sorteio é vinculado a CPF, permitindo acesso único e seguro ao resultado.',
      features: [
        'Criação de eventos de Amigo Secreto com ou sem grupos',
        'Cadastro de participantes com identificação via CPF',
        'Sistema de sorteio automático e seguro',
        'Acesso individual ao resultado via link + CPF',
        'Integração entre frontend Next.js e backend Node.js via API REST',
      ],
    },
  },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  // Filtrar projetos com base na aba ativa
  const filteredProjects = projects.filter((project) =>
    activeTab === 'all' ? true : project.category === activeTab
  );

  return (
    <section id="projects" className="py-20" aria-label="Portfólio de projetos">
      <div className="container max-w-4xl">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Tabs defaultValue="all" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-3 w-[400px] mx-auto">
              <TabsTrigger value="all">Todos</TabsTrigger>
              <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
            </TabsList>
          </Tabs>

          <Dialog
            open={isOpen}
            onOpenChange={(open) => {
              setIsOpen(open);
              if (!open) setSelectedProject(null); // Limpar projeto selecionado ao fechar
            }}
          >
            <div className="grid md:grid-cols-2 gap-6">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <Card className="h-full flex flex-col overflow-hidden group">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={project.image || '/placeholder.svg'}
                        alt={`Imagem do projeto ${project.title}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          onClick={() => {
                            setSelectedProject(project);
                            setIsOpen(true);
                          }}
                          aria-label={`Ver detalhes do projeto ${project.title}`}
                        >
                          <Layers className="mr-2 h-4 w-4" />
                          Detalhes
                        </Button>
                      </DialogTrigger>
                      <div className="flex gap-2">
                        {project.demoUrl && (
                          <Button variant="ghost" size="icon" asChild>
                            <a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Acessar demonstração do projeto ${project.title}`}
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
                              aria-label={`Ver código do projeto ${project.title}`}
                            >
                              <Github className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>

            {selectedProject && (
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>{selectedProject.title}</DialogTitle>
                  <DialogDescription>
                    {selectedProject.description}
                  </DialogDescription>
                </DialogHeader>
                <div className="relative h-64 my-4">
                  <Image
                    src={selectedProject.image || '/placeholder.svg'}
                    alt={`Imagem do projeto ${selectedProject.title}`}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">O Desafio</h4>
                    <p className="text-sm text-muted-foreground">
                      {selectedProject.details.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">A Solução</h4>
                    <p className="text-sm text-muted-foreground">
                      {selectedProject.details.solution}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Funcionalidades</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {selectedProject.details.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex gap-4 pt-4">
                    {selectedProject.demoUrl && (
                      <Button asChild>
                        <a
                          href={selectedProject.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Ver Demo
                        </a>
                      </Button>
                    )}
                    {selectedProject.repoUrl && (
                      <Button variant="outline" asChild>
                        <a
                          href={selectedProject.repoUrl}
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
            )}
          </Dialog>
        </motion.div>
      </div>
    </section>
  );
}
