export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
  category: 'fullstack' | 'frontend';
  details: {
    challenge: string;
    solution: string;
    features: string[];
  };
}
