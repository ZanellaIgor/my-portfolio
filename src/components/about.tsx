"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-2">Sobre Mim</h2>
          <p className="text-muted-foreground">Conheça um pouco da minha trajetória profissional</p>
        </motion.div>

        <div className="grid md:grid-cols-[2fr_1fr] gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardContent className="p-6 space-y-4">
                <p>
                  Sou um desenvolvedor web full stack apaixonado por criar experiências digitais intuitivas e
                  impactantes. Com mais de 5 anos de experiência no desenvolvimento de aplicações web, tenho trabalhado
                  com as tecnologias mais modernas do mercado.
                </p>

                <p>
                  Minha jornada começou com HTML, CSS e JavaScript, e desde então venho me especializando em frameworks
                  como React, Next.js e Node.js. Acredito que o bom código não é apenas aquele que funciona, mas o que é
                  legível, manutenível e escalável.
                </p>

                <p>
                  Tenho experiência em liderar equipes de desenvolvimento e implementar metodologias ágeis para otimizar
                  processos. Meu objetivo é sempre entregar soluções que não apenas atendam às necessidades do cliente,
                  mas que superem suas expectativas.
                </p>

                <p>
                  Além do desenvolvimento, sou um entusiasta de UX/UI, acessibilidade web e performance. Acredito que
                  esses aspectos são fundamentais para criar produtos digitais verdadeiramente inclusivos e eficientes.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-2">Meu diferencial</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Foco em código limpo e bem documentado</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Experiência com arquiteturas escaláveis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Conhecimento em CI/CD e DevOps</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Habilidade em otimização de performance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-4">Currículo</h3>
                <Button className="w-full" asChild>
                  <a href="/cv.pdf" download>
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
