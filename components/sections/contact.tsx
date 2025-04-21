'use client';

import { motion } from 'framer-motion';
import { ReactNode, useCallback } from 'react';
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

  const copyToClipboard = useCallback(
    (text: string) => {
      navigator.clipboard.writeText(text);
      toast({
        title: 'Informação copiada!',
        description: 'Agora é só colar onde quiser.',
      });
    },
    [toast]
  );

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
            Você pode me encontrar por aqui 👇
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
              <CardTitle>Vamos nos conectar</CardTitle>
              <CardDescription>
                Estou disponível por esses canais. Fique à vontade para me
                chamar!
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <ContactInfo
                icon={<Mail className="h-5 w-5 mr-3 text-primary" />}
                label="Email"
                value="igorznll@hotmail.com"
                onCopy={copyToClipboard}
              />
              <ContactInfo
                icon={<Phone className="h-5 w-5 mr-3 text-primary" />}
                label="Telefone"
                value="+55 (54) 98144-2437"
                onCopy={copyToClipboard}
              />
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
                  <SocialIcon
                    href="https://github.com/ZanellaIgor"
                    label="GitHub"
                    icon={<Github className="h-4 w-4 text-[#333]" />}
                  />
                  <SocialIcon
                    href="https://www.linkedin.com/in/zanella-igor"
                    label="LinkedIn"
                    icon={<Linkedin className="h-4 w-4 text-[#0e76a8]" />}
                  />
                  <SocialIcon
                    href="mailto:igorznll@hotmail.com"
                    label="Email"
                    icon={<Mail className="h-4 w-4 text-primary" />}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

function ContactInfo({
  icon,
  label,
  value,
  onCopy,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  onCopy: (text: string) => void;
}) {
  return (
    <div className="flex items-start">
      {icon}
      <div>
        <h3 className="text-sm font-medium">{label}</h3>
        <p className="text-sm text-muted-foreground">{value}</p>
        <Button
          variant="ghost"
          size="sm"
          className="h-7 px-2 mt-1 active:scale-95 transition-transform"
          onClick={() => onCopy(value)}
        >
          <Copy className="h-3 w-3 mr-1" />
          <span className="text-xs">Copiar</span>
        </Button>
      </div>
    </div>
  );
}

function SocialIcon({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <Button variant="outline" size="icon" className="hover:scale-105" asChild>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
      >
        {icon}
      </a>
    </Button>
  );
}
