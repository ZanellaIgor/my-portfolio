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
import { Briefcase, Calendar } from 'lucide-react';
import { experiences } from '@/data/experience';

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-2">
            Experiência Profissional
          </h2>
          <p className="text-muted-foreground">
            Minha trajetória profissional na área de desenvolvimento
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border -ml-px md:ml-0 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div
                  className={`md:flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary z-10" />

                  <div className="flex items-center mb-4 md:hidden">
                    <Badge variant="outline" className="flex items-center">
                      <Calendar className="mr-1 h-3 w-3" />
                      {exp.period}
                    </Badge>
                  </div>

                  <div
                    className={`md:w-1/2 ${
                      index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                    }`}
                  >
                    <Card>
                      <CardHeader>
                        <div className="hidden md:flex items-center mb-2">
                          <Badge
                            variant="outline"
                            className="flex items-center"
                          >
                            <Calendar className="mr-1 h-3 w-3" />
                            {exp.period}
                          </Badge>
                        </div>
                        <CardTitle className="flex items-center">
                          <Briefcase className="mr-2 h-5 w-5 text-primary" />
                          {exp.position}
                        </CardTitle>
                        <CardDescription>{exp.company}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4">{exp.description}</p>
                        <div className="mb-4">
                          <h4 className="text-sm font-medium mb-2">
                            Responsabilidades:
                          </h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {exp.responsibilities.map((resp, i) => (
                              <li key={i} className="flex items-start">
                                <span className="text-primary mr-2">•</span>
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
