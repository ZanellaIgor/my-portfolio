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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { useMemo } from 'react';
import {
  educations,
  certifications,
  IEducation,
  ICertification,
} from '../../data/education';

function EducationCard({ edu }: { edu: IEducation }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center mb-2">
          <Badge variant="outline" className="flex items-center">
            <Calendar className="mr-1 h-3 w-3" aria-hidden="true" />
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
  );
}

function CertificationList({
  year,
  certifications,
}: {
  year: string;
  certifications: ICertification[];
}) {
  return (
    <AccordionItem value={`item-${year}`}>
      <AccordionTrigger>{year}</AccordionTrigger>
      <AccordionContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <div key={cert.id} className="flex flex-col">
              <h4 className="font-medium">{cert.name}</h4>
              <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              <div className="flex items-center mt-1 text-sm">
                <Calendar className="mr-1 h-3 w-3" aria-hidden="true" />
                <span>{cert.date}</span>
              </div>
              <p className="text-xs text-muted-foreground my-1">
                ID: {cert.credentialId || 'N/A'}
              </p>
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}

const extractYear = (date: string): string => {
  return date.split(' ')[1];
};

const groupCertificationsByYear = (
  certifications: ICertification[]
): { [key: string]: ICertification[] } => {
  return certifications.reduce((acc, cert) => {
    const year = extractYear(cert.date);
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(cert);
    return acc;
  }, {} as { [key: string]: ICertification[] });
};

const sortCertificationsByYear = (groupedCerts: {
  [key: string]: ICertification[];
}): string[] => {
  return Object.keys(groupedCerts).sort((a, b) => parseInt(b) - parseInt(a));
};

export default function Education() {
  const groupedCertifications = useMemo(
    () => groupCertificationsByYear(certifications),
    [certifications]
  );
  const sortedYears = useMemo(
    () => sortCertificationsByYear(groupedCertifications),
    [groupedCertifications]
  );

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
          <h2
            id="education-heading"
            className="text-3xl font-bold tracking-tight mb-2"
          >
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
              <GraduationCap
                className="mr-2 h-5 w-5 text-primary"
                aria-hidden="true"
              />
              Educação Formal
            </h3>
            <div className="space-y-6">
              {educations.length > 0 ? (
                educations.map((edu) => (
                  <EducationCard key={edu.id} edu={edu} />
                ))
              ) : (
                <p className="text-muted-foreground text-center">
                  Nenhuma formação acadêmica registrada.
                </p>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-medium mb-6 flex items-center">
              <Award className="mr-2 h-5 w-5 text-primary" aria-hidden="true" />
              Cursos
            </h3>
            <Card>
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="w-full">
                  {sortedYears.length > 0 ? (
                    sortedYears.map((year) => (
                      <CertificationList
                        key={year}
                        year={year}
                        certifications={groupedCertifications[year]}
                      />
                    ))
                  ) : (
                    <p className="text-muted-foreground text-center">
                      Nenhuma certificação registrada.
                    </p>
                  )}
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
