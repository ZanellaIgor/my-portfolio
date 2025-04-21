import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { emailURL, githubURL, linkedinURL } from '@/const/contacts';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted py-8 mt-16">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <Link href="#hero" className="text-lg font-bold">
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
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href={linkedinURL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href={emailURL}
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
