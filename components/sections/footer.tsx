import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { githubURL, linkedinURL, mailtoURL } from '@/const/contacts';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted py-8 mt-16">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <Link
              href="#hero"
              className="font-heading text-lg font-bold tracking-tight"
            >
              <span className="text-primary">Dev</span>Igor
            </Link>
            <p className="text-sm text-muted-foreground mt-1">
              © {currentYear} Todos os direitos reservados
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href={githubURL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" aria-hidden="true" />
            </Link>
            <Link
              href={linkedinURL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" aria-hidden="true" />
            </Link>
            <Link
              href={mailtoURL}
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
