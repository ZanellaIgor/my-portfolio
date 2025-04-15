"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Skill data
const skillCategories = [
  {
    id: "frontend",
    name: "Frontend",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript", level: 92 },
      { name: "TypeScript", level: 85 },
      { name: "React", level: 90 },
      { name: "Next.js", level: 88 },
      { name: "TailwindCSS", level: 85 },
      { name: "Framer Motion", level: 75 },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express", level: 85 },
      { name: "NestJS", level: 80 },
      { name: "Python", level: 75 },
      { name: "Django", level: 70 },
      { name: "GraphQL", level: 78 },
      { name: "REST API", level: 90 },
    ],
  },
  {
    id: "database",
    name: "Banco de Dados",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 82 },
      { name: "MySQL", level: 80 },
      { name: "Redis", level: 75 },
      { name: "Firebase", level: 78 },
    ],
  },
  {
    id: "devops",
    name: "DevOps",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 80 },
      { name: "CI/CD", level: 78 },
      { name: "AWS", level: 75 },
      { name: "Vercel", level: 85 },
    ],
  },
  {
    id: "tools",
    name: "Ferramentas",
    skills: [
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 80 },
      { name: "Jira", level: 85 },
      { name: "Postman", level: 90 },
      { name: "Webpack", level: 78 },
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-2">Habilidades Técnicas</h2>
          <p className="text-muted-foreground">Tecnologias e ferramentas que utilizo no dia a dia</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
              {skillCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {skillCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <Card>
                  <CardHeader>
                    <CardTitle>{category.name}</CardTitle>
                    <CardDescription>Minhas habilidades em {category.name.toLowerCase()}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      {category.skills.map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <div className="flex justify-between items-center mb-2">
                            <div className="flex items-center">
                              <span className="font-medium">{skill.name}</span>
                              <Badge variant="outline" className="ml-2">
                                {skill.level}%
                              </Badge>
                            </div>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground">
            Sempre em constante aprendizado e aprimoramento de minhas habilidades técnicas.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
