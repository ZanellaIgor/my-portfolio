export interface IEducation {
  id: number;
  institution: string;
  degree: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface ICertification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  skills: string[];
}

export const educations: IEducation[] = [
  {
    id: 1,
    institution: 'FAMEESP - Faculdade Metropolitana do Estado de São Paulo',
    degree: 'Pós-graduação Lato Sensu em Engenharia de Software',
    period: 'Jun 2024 - Dez 2024',
    description:
      'Especialização com foco em ciclo de vida de software, engenharia de requisitos, projeto e teste de software, qualidade de software, gerenciamento de projetos, configuração e governança de TI.',
    highlights: [
      'Ênfase testes e boas práticas de engenharia',
      'Desenvolvimento de habilidades em gestão de projetos e qualidade de software',
    ],
  },
  {
    id: 2,
    institution: 'Uniftec',
    degree: 'Bacharelado em Engenharia Elétrica',
    period: 'Jul 2012 - Dez 2021',
    description:
      'Formação sólida em engenharia com foco em raciocínio lógico, resolução de problemas e sistemas eletrônicos, que contribuiu para a transição à área de tecnologia.',
    highlights: [
      'Desenvolvimento de pensamento analítico e estruturado',
      'Base matemática e lógica aplicada em programação',
      'Transição bem-sucedida para a área de software após a graduação',
    ],
  },
];

export const certifications: ICertification[] = [
  {
    id: 1,
    name: 'Dominando NestJS',
    issuer: 'Cod3r',
    date: 'Abr 2025',
    credentialId: 'b80da3c1-c444-4079-89c2-d43b42892cf6',
    skills: ['NestJS', 'TypeScript'],
  },
  {
    id: 2,
    name: 'Fundamentos de React',
    issuer: 'Cod3r',
    date: 'Mar 2025',
    credentialId: '00efc8b6-9657-42a8-9871-eda5e81cedb8',
    skills: ['React', 'React Hooks'],
  },
  {
    id: 3,
    name: 'React com Tailwind CSS',
    issuer: 'Cod3r',
    date: 'Dez 2024',
    credentialId: '38f1deff-eb31-41c7-a117-9244c16d7f09',
    skills: ['React', 'Tailwind CSS', 'React Hooks'],
  },
  {
    id: 4,
    name: 'NestJS para REST API com TypeORM, Autenticação JWT e Testes',
    issuer: 'Udemy',
    date: 'Out 2024',
    credentialId: 'UC-17496208-dc05-435d-9c39-da06d6b41fbe',
    skills: ['NestJS', 'Node.js', 'Jest', 'TypeORM'],
  },
  {
    id: 5,
    name: 'Next.js',
    issuer: 'Cod3r',
    date: 'Out 2024',
    credentialId: 'cb78e8ec-d356-4aea-a001-967f4cc721be',
    skills: ['Next.js', 'React', 'Tailwind CSS'],
  },
  {
    id: 6,
    name: 'NLW Pocket: Javascript - Full-stack Intermediário',
    issuer: 'Rocketseat',
    date: 'Set 2024',
    credentialId: '52ba3813-cc15-4fe9-bb1e-11237bd86ed0',
    skills: ['JavaScript', 'React', 'Full-stack'],
  },
  {
    id: 7,
    name: 'ReactJS',
    issuer: 'B7Web',
    date: 'Set 2024',
    skills: [
      'React',
      'React Hooks',
      'Next.js',
      'API REST',
      'Shadcn/ui',
      'Styled-components',
      'Tailwind CSS',
    ],
  },
  {
    id: 8,
    name: 'NLW Journey - Node.js',
    issuer: 'Rocketseat',
    date: 'Jul 2024',
    credentialId: '7de9a332-ec01-409b-b5c6-6aa08ebe8122',
    skills: ['Node.js'],
  },
  {
    id: 9,
    name: 'NLW Journey - React.js',
    issuer: 'Rocketseat',
    date: 'Jul 2024',
    credentialId: 'deb5c773-dae3-41bc-8546-f2bfa8750128',
    skills: ['React', 'React.js', 'Tailwind CSS'],
  },
  {
    id: 10,
    name: 'NLW Unite - React.js',
    issuer: 'Rocketseat',
    date: 'Abr 2024',
    credentialId: 'a2432a62-0b37-4493-91a7-5eec62625549',
    skills: ['React', 'React.js'],
  },
  {
    id: 11,
    name: 'NLW Expert - Node.js',
    issuer: 'Rocketseat',
    date: 'Fev 2024',
    credentialId: '0ea5b685-490b-4cd1-9cf0-ff24fb01d821',
    skills: ['Node.js'],
  },
  {
    id: 12,
    name: 'JavaScript - Curso Completo com 6 Projetos Reais',
    issuer: 'Udemy',
    date: 'Dez 2023',
    credentialId: 'UC-02dfa259-14a5-401d-acf1-19f8cb8032a1',
    skills: ['JavaScript', 'Node.js', 'Bibliotecas JS'],
  },
  {
    id: 13,
    name: 'TypeScript',
    issuer: 'B7Web',
    date: 'Ago 2023',
    skills: ['TypeScript'],
  },
  {
    id: 14,
    name: 'HTML5 e CSS3',
    issuer: 'B7Web',
    date: 'Jul 2023',
    skills: ['HTML', 'CSS', 'HTML5', 'CSS3'],
  },
  {
    id: 15,
    name: 'JavaScript',
    issuer: 'B7Web',
    date: 'Jul 2023',
    skills: ['JavaScript'],
  },
];
