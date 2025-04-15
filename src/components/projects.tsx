"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Github, Layers } from "lucide-react"
import Image from "next/image"

// Project data
const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "Uma plataforma completa de e-commerce com painel administrativo, gateway de pagamento e sistema de gerenciamento de estoque.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "Node.js", "MongoDB", "Stripe", "Docker"],
    demoUrl: "https://exemplo.com",
    repoUrl: "https://github.com",
    category: "fullstack",
    details: {
      challenge:
        "Desenvolver uma plataforma escalável que pudesse lidar com alto volume de tráfego e transações simultâneas.",
      solution:
        "Implementação de arquitetura de microserviços, cache distribuído e otimização de consultas ao banco de dados.",
      features: [
        "Painel administrativo completo",
        "Integração com gateway de pagamento",
        "Sistema de gerenciamento de estoque",
        "Análise de dados e relatórios",
        "Otimização para SEO",
      ],
    },
  },
  {
    id: 2,
    title: "CRM para Gestão de Clientes",
    description:
      "Sistema de gerenciamento de relacionamento com clientes com automação de marketing e análise de dados.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Express", "PostgreSQL", "Redis", "AWS"],
    demoUrl: "https://exemplo.com",
    repoUrl: "https://github.com",
    category: "fullstack",
    details: {
      challenge:
        "Criar um sistema que integrasse dados de múltiplas fontes e oferecesse insights acionáveis para equipes de vendas.",
      solution:
        "Desenvolvimento de uma arquitetura de dados centralizada com ETL automatizado e dashboards personalizáveis.",
      features: [
        "Pipeline de vendas visual",
        "Automação de email marketing",
        "Integração com APIs externas",
        "Dashboards personalizáveis",
        "Sistema de notificações em tempo real",
      ],
    },
  },
  {
    id: 3,
    title: "Dashboard Analítico",
    description:
      "Interface de usuário avançada para visualização de dados com gráficos interativos e filtros dinâmicos.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "D3.js", "TailwindCSS", "Framer Motion"],
    demoUrl: "https://exemplo.com",
    repoUrl: "https://github.com",
    category: "frontend",
    details: {
      challenge: "Criar uma interface intuitiva para visualização de grandes volumes de dados complexos.",
      solution:
        "Utilização de técnicas avançadas de UX/UI e bibliotecas de visualização de dados para criar uma experiência fluida e informativa.",
      features: [
        "Gráficos interativos e responsivos",
        "Filtros dinâmicos em tempo real",
        "Exportação de relatórios em múltiplos formatos",
        "Temas personalizáveis",
        "Animações suaves para transições de dados",
      ],
    },
  },
]

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="py-20">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-2">Projetos</h2>
          <p className="text-muted-foreground">Conheça alguns dos meus trabalhos mais recentes</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Tabs defaultValue="all" className="w-full mb-8">
            <TabsList className="grid grid-cols-3 w-[400px] mx-auto">
              <TabsTrigger value="all">Todos</TabsTrigger>
              <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
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
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
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
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" onClick={() => setSelectedProject(project)}>
                          <Layers className="mr-2 h-4 w-4" />
                          Detalhes
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        {selectedProject && (
                          <>
                            <DialogHeader>
                              <DialogTitle>{selectedProject.title}</DialogTitle>
                              <DialogDescription>{selectedProject.description}</DialogDescription>
                            </DialogHeader>
                            <div className="relative h-64 my-4">
                              <Image
                                src={selectedProject.image || "/placeholder.svg"}
                                alt={selectedProject.title}
                                fill
                                className="object-cover rounded-md"
                              />
                            </div>
                            <div className="space-y-4">
                              <div>
                                <h4 className="font-medium mb-2">O Desafio</h4>
                                <p className="text-sm text-muted-foreground">{selectedProject.details.challenge}</p>
                              </div>
                              <div>
                                <h4 className="font-medium mb-2">A Solução</h4>
                                <p className="text-sm text-muted-foreground">{selectedProject.details.solution}</p>
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
                                <Button asChild>
                                  <a href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="mr-2 h-4 w-4" />
                                    Ver Demo
                                  </a>
                                </Button>
                                <Button variant="outline" asChild>
                                  <a href={selectedProject.repoUrl} target="_blank" rel="noopener noreferrer">
                                    <Github className="mr-2 h-4 w-4" />
                                    Código Fonte
                                  </a>
                                </Button>
                              </div>
                            </div>
                          </>
                        )}
                      </DialogContent>
                    </Dialog>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" asChild>
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" aria-label="Ver demo">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button variant="ghost" size="icon" asChild>
                        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" aria-label="Ver código">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
