'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { badgeVariants, skillsData } from '@/data/skills';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

// Skill data
type ISkillCategoryCard = {
  title: string;
  skills: string[];
  badgeVariant: 'default' | 'secondary' | 'destructive' | 'outline';
};

function SkillCategoryCard({
  title,
  skills,
  badgeVariant,
}: ISkillCategoryCard) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-heading text-xl font-semibold">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant={badgeVariant}>
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export function Skills() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="skills"
      className="min-h-screen py-24 bg-muted/70 flex items-center justify-center"
    >
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading mb-2">Habilidades Técnicas</h2>
          <p className="section-intro mx-auto">
            Stack de tecnologias com as quais trabalho e continuo evoluindo
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skillsData).map(([category, skills]) => (
              <motion.div
                key={category}
                {...(!reducedMotion && {
                  whileHover: { scale: 1.02 },
                  whileTap: { scale: 0.98 },
                })}
              >
                <SkillCategoryCard
                  title={category}
                  skills={skills}
                  badgeVariant={
                    badgeVariants[category as keyof typeof badgeVariants]
                  }
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
