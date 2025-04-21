'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Download } from 'lucide-react';
import Image from 'next/image';

export function About() {
  return (
    <section
      id="about"
      className="min-h-screen py-24 flex items-center justify-center"
    >
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">Sobre Mim</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary">
              <Image
                src="/perfil-1.jpeg"
                alt="Foto de perfil"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="bg-muted/50">
              <CardContent className="py-4">
                <div className="space-y-4">
                  <p className="text-lg">
                    Minha trajetória como Desenvolvedor tem sido marcada por uma
                    busca contínua por aprimoramento e pela dedicação em
                    solucionar desafios complexos.
                  </p>
                  <p className="text-lg">
                    Possuo experiência na concepção e desenvolvimento de
                    aplicações web responsivas e intuitivas, utilizando um
                    conjunto diversificado de tecnologias que abrangem o
                    front-end (React, Next.js) e o back-end (Node.js, bancos de
                    dados).
                  </p>

                  <p className="text-lg">
                    Minha motivação está em transformar problemas complexos em
                    soluções simples, eficientes e acessíveis, criando
                    experiências que impactam positivamente os usuários.
                  </p>
                </div>
                <div className="flex justify-center pt-4">
                  <Button
                    size="lg"
                    className="group relative overflow-hidden"
                    variant="default"
                  >
                    <span className="relative z-10 flex items-center">
                      <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                      Baixar Currículo
                    </span>
                    <span className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
