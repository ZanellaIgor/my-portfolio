'use client';

import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Button } from '../ui/button';
import { useToast } from '@/hooks/use-toast';
import { Copy, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export function Contact() {
  const { toast } = useToast();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: 'Copiado!',
      description: 'Informação copiada para a área de transferência.',
    });
  };

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-2">Contato</h2>
          <p className="text-muted-foreground">
            Entre em contato pelos canais abaixo
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Informações de Contato</CardTitle>
              <CardDescription>
                Fique à vontade para entrar em contato através dos canais abaixo
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-primary" />
                <div>
                  <h3 className="text-sm font-medium">Email</h3>
                  <p className="text-sm text-muted-foreground">
                    igorznll@hotmail.com
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-7 px-2 mt-1"
                    onClick={() => copyToClipboard('igorznll@hotmail.com')}
                  >
                    <Copy className="h-3 w-3 mr-1" />
                    <span className="text-xs">Copiar</span>
                  </Button>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-primary" />
                <div>
                  <h3 className="text-sm font-medium">Telefone</h3>
                  <p className="text-sm text-muted-foreground">
                    +55 (54) 98144-2437
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-7 px-2 mt-1"
                    onClick={() => copyToClipboard('+55 (54) 98144-2437')}
                  >
                    <Copy className="h-3 w-3 mr-1" />
                    <span className="text-xs">Copiar</span>
                  </Button>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-primary" />
                <div>
                  <h3 className="text-sm font-medium">Localização</h3>
                  <p className="text-sm text-muted-foreground">
                    Caxias do Sul, RS - Brasil
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Disponível para trabalho remoto
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-separate">
                <h3 className="text-sm font-medium mb-3">Redes Sociais</h3>
                <div className="flex gap-3">
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href="https://github.com/ZanellaIgor"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href="https://www.linkedin.com/in/zanella-igor"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="mailto:igorznll@hotmail.com" aria-label="Email">
                      <Mail className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
