'use client';

import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

// Skill data
const skillsData = {
  Frontend: [
    'HTML5',
    'CSS3',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'TailwindCSS',
    'Framer Motion',
    'Redux',
    'Styled Components',
  ],
  Backend: [
    'Node.js',
    'Express',
    'NestJS',
    'REST API',
    'GraphQL',
    'WebSockets',
    'Autenticação JWT',
  ],
  'Banco de Dados': [
    'MongoDB',
    'PostgreSQL',
    'MySQL',
    'Redis',
    'Prisma ORM',
    'Mongoose',
  ],
  'DevOps & Ferramentas': [
    'Git',
    'GitHub',
    'Docker',
    'CI/CD',
    'AWS',
    'Vercel',
    'Netlify',
  ],
};

export function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen py-24 bg-muted/50 flex items-center justify-center"
    >
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-2 text-center">
            Habilidades Técnicas
          </h2>
          <p className="text-muted-foreground text-center">
            Tecnologias e ferramentas que utilizo no dia a dia
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {Object.entries(skillsData).map(([category, skills]) => (
              <Card key={category}>
                <CardHeader>
                  <CardTitle className="text-xl">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
