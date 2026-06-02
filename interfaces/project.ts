export interface ProjectRepositories {
  frontend: string;
  backend?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  /** Repositório único (projetos monorepo ou só front-end) */
  repoUrl?: string;
  /** Repositórios separados de front-end e back-end */
  repos?: ProjectRepositories;
  category: 'fullstack' | 'frontend';
  details: {
    challenge: string;
    solution: string;
    features: string[];
  };
}
