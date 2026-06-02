import { Project } from '@/interfaces/project';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Gestor de Condomínios',
    description:
      'Aplicação fullstack para administração de condomínios, com painel administrativo, controle de usuários, avisos, manutenções, reservas e enquetes.',
    image: '/condominium-admin.png',
    tags: [
      'React.js',
      'Material UI',
      'NestJS',
      'Prisma',
      'PostgreSQL',
      'Docker',
      'TypeScript',
      'React Query',
      'React Hook Form',
      'Zod',
      'Zustand',
    ],
    repoUrl: 'https://github.com/ZanellaIgor/CondominiumAdmin',
    category: 'fullstack',
    details: {
      challenge:
        'Criar uma solução administrativa com múltiplos módulos, controle de acesso por papéis e uma estrutura capaz de organizar regras de negócio, dados e fluxos operacionais de forma escalável.',
      solution:
        'A aplicação foi estruturada com separação entre front-end e back-end. O back-end utiliza NestJS, Prisma, PostgreSQL, autenticação JWT e documentação via Swagger. O front-end utiliza React, Material UI, React Query, Zustand, React Hook Form e Zod para criar uma experiência consistente, validada e responsiva.',
      features: [
        'Painel administrativo para gestão de usuários, apartamentos e áreas comuns',
        'CRUD de avisos, manutenções, reservas e enquetes',
        'Controle de acesso baseado em papéis',
        'Autenticação JWT com validação de dados',
        'API documentada com Swagger',
        'Formulários com React Hook Form e Zod',
        'Gerenciamento de estado com Zustand',
        'Requisições assíncronas com React Query',
        'Interface responsiva com Material UI',
      ],
    },
  },
  {
    id: 2,
    title: 'Dev Sushi',
    description:
      'Aplicação web para uma loja fictícia de sushi, com interface responsiva, carrinho de compras, formulário multi-etapas e envio de pedidos via WhatsApp.',
    image: '/dev-sushi.png',
    tags: [
      'Next.js',
      'React',
      'Tailwind CSS',
      'Zod',
      'React Hook Form',
      'Shadcn/ui',
      'Zustand',
      'TypeScript',
    ],
    repoUrl: 'https://github.com/ZanellaIgor/dev-sushi',
    category: 'frontend',
    details: {
      challenge:
        'Criar uma jornada de compra simples, moderna e responsiva, reduzindo atrito no fluxo de pedido e centralizando a experiência do usuário em uma interface objetiva.',
      solution:
        'A aplicação foi construída com Next.js, React, TypeScript e Tailwind CSS. O fluxo de pedido utiliza estado global com Zustand, validações com Zod, formulários com React Hook Form e componentes baseados em Shadcn/ui.',
      features: [
        'Carrinho de compras funcional',
        'Formulário multi-etapas com validação',
        'Envio de pedidos automatizado via WhatsApp',
        'Tema claro e escuro com persistência de preferência',
        'Interface responsiva com Tailwind CSS',
        'Componentes acessíveis com Shadcn/ui',
      ],
    },
  },
  {
    id: 3,
    title: 'Amigo Secreto - Sorteio Dinâmico',
    description:
      'Aplicação fullstack para criação de eventos de Amigo Secreto, com cadastro de participantes, grupos personalizados e acesso individual ao resultado do sorteio.',
    image: '/amigo-secreto.png',
    tags: [
      'Next.js',
      'React.js',
      'Tailwind CSS',
      'TypeScript',
      'Node.js',
      'Prisma',
      'Docker',
    ],
    repoUrl: 'https://github.com/ZanellaIgor/amigo-secreto',
    category: 'fullstack',
    details: {
      challenge:
        'Criar um sistema de sorteio com persistência de dados, acesso individual ao resultado e suporte a agrupamento de participantes, mantendo uma experiência simples para o usuário final.',
      solution:
        'A solução combina front-end em Next.js com Tailwind CSS e back-end em Node.js, Prisma e Docker. O sorteio é vinculado ao CPF do participante, permitindo consulta individual ao resultado de forma controlada.',
      features: [
        'Criação de eventos de Amigo Secreto',
        'Cadastro de participantes com identificação via CPF',
        'Suporte a eventos com ou sem grupos',
        'Sorteio automático e persistido',
        'Acesso individual ao resultado via link e CPF',
        'Integração entre front-end Next.js e API Node.js',
      ],
    },
  },
];