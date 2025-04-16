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
import { GraduationCap, Calendar, Award } from 'lucide-react';

// Education data
const educations = [
  {
    id: 1,
    institution: 'Universidade Federal de Tecnologia',
    degree: 'Bacharelado em Ciência da Computação',
    period: '2013 - 2017',
    description:
      'Formação completa em Ciência da Computação com foco em desenvolvimento de software, algoritmos e estruturas de dados.',
    highlights: [
      'Projeto de conclusão de curso sobre otimização de algoritmos',
      'Participação em maratona de programação',
      'Monitoria em disciplinas de programação',
    ],
  },
  {
    id: 2,
    institution: 'Tech Academy',
    degree: 'Especialização em Desenvolvimento Web Full Stack',
    period: '2018 - 2019',
    description:
      'Curso intensivo focado em tecnologias modernas para desenvolvimento web full stack.',
    highlights: [
      'Desenvolvimento de projetos práticos com React e Node.js',
      'Implementação de APIs RESTful e GraphQL',
      'Trabalho em equipe utilizando metodologias ágeis',
    ],
  },
];

// Certification data
const certifications = [
  {
    id: 1,
    name: 'AWS Certified Developer - Associate',
    issuer: 'Amazon Web Services',
    date: '2022',
    credentialId: 'AWS-DEV-12345',
  },
  {
    id: 2,
    name: 'Professional Scrum Master I (PSM I)',
    issuer: 'Scrum.org',
    date: '2021',
    credentialId: 'PSM-12345',
  },
  {
    id: 3,
    name: 'MongoDB Certified Developer',
    issuer: 'MongoDB University',
    date: '2020',
    credentialId: 'MCD-12345',
  },
  {
    id: 4,
    name: 'React Developer Certification',
    issuer: 'Meta',
    date: '2021',
    credentialId: 'RDC-12345',
  },
];

export function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-2">
            Formação Acadêmica
          </h2>
          <p className="text-muted-foreground">
            Minha educação formal e certificações profissionais
          </p>
        </motion.div>

        <div className="grid gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-medium mb-6 flex items-center">
              <GraduationCap className="mr-2 h-5 w-5 text-primary" />
              Educação Formal
            </h3>

            <div className="space-y-6">
              {educations.map((edu, index) => (
                <Card key={edu.id}>
                  <CardHeader>
                    <div className="flex items-center mb-2">
                      <Badge variant="outline" className="flex items-center">
                        <Calendar className="mr-1 h-3 w-3" />
                        {edu.period}
                      </Badge>
                    </div>
                    <CardTitle>{edu.degree}</CardTitle>
                    <CardDescription>{edu.institution}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{edu.description}</p>
                    <div>
                      <h4 className="text-sm font-medium mb-2">Destaques:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {edu.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-medium mb-6 flex items-center">
              <Award className="mr-2 h-5 w-5 text-primary" />
              Certificações
            </h3>

            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {certifications.map((cert) => (
                    <div key={cert.id} className="flex flex-col">
                      <h4 className="font-medium">{cert.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {cert.issuer}
                      </p>
                      <div className="flex items-center mt-1 text-sm">
                        <Calendar className="mr-1 h-3 w-3" />
                        <span>{cert.date}</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        ID: {cert.credentialId}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
