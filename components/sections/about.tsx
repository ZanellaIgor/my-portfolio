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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
      >
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Sobre Mim</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center ">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary">
                <Image
                  src="/perfil-1.jpeg"
                  alt="Foto de perfil"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <Card className="bg-muted/50">
              <CardContent className="py-4">
                <p className="text-lg">
                  Sou um desenvolvedor web full stack com experiência em criar
                  aplicações web modernas e responsivas. Minha paixão está em
                  desenvolver soluções que combinam design atraente com código
                  limpo e eficiente.
                </p>
                <p className="text-lg">
                  Tenho experiência com diversas tecnologias front-end e
                  back-end, incluindo React, Next.js, Node.js, e bancos de dados
                  SQL e NoSQL. Estou sempre buscando aprender novas tecnologias
                  e aprimorar minhas habilidades.
                </p>
                <p className="text-lg">
                  Meu objetivo é contribuir para projetos desafiadores que me
                  permitam crescer profissionalmente enquanto crio valor para
                  usuários e empresas.
                </p>
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
          </div>
        </div>
      </motion.div>
    </section>
  );
}
