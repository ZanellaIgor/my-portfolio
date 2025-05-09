import { Project } from '@/interfaces/project';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Gestor de Condomínios',
    description:
      'Sistema completo para administração de condomínios, com funcionalidades como avisos, manutenções, reservas, enquetes e painel administrativo.',
    image: '/condominium-admin.png',
    tags: [
      'React.js',
      'Material UI',
      'Nest.js',
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
        'Criar uma solução escalável que facilitasse a comunicação e a gestão de múltiplos condomínios, com controle de acesso baseado em papéis (roles) e boa performance.',
      solution:
        'Divisão da aplicação em front-end e back-end com arquitetura modular. Backend em NestJS com autenticação via JWT, documentação Swagger e banco relacional com Prisma/PostgreSQL. Front-end em React/Next com gerenciamento de estado via Zustand e requisições assíncronas com React Query.',
      features: [
        'Painel administrativo com controle de usuários, apartamentos e espaços de reserva',
        'CRUD completo de avisos, manutenções, reservas e enquetes',
        'Controle de acesso baseado em roles (User, Admin, Master)',
        'Autenticação JWT com validação de dados',
        'API documentada com Swagger',
        'Frontend com formulários validados (React Hook Form + Zod)',
        'Experiência de uso fluída com React Query e Zustand',
        'Design responsivo utilizando Material UI',
      ],
    },
  },
  {
    id: 2,
    title: 'Dev Sushi',
    description:
      'Aplicação web de uma loja fictícia de sushi, com foco em UX moderna, formulário multi-etapas e integração com WhatsApp para envio de pedidos.',
    image: '/dev-sushi.png',
    tags: [
      'Next.js',
      'React',
      'Tailwind CSS',
      'Zod',
      'React Hook Form',
      'Shadcn-ui',
      'Zustand',
      'TypeScript',
    ],

    repoUrl: 'https://github.com/ZanellaIgor/dev-sushi',
    category: 'frontend',
    details: {
      challenge:
        'Criar uma aplicação com interface moderna, responsiva e que proporcionasse uma jornada de compra simples e eficiente, com integração externa para envio de pedidos.',
      solution:
        'Utilização de componentes acessíveis com Shadcn-ui, gerenciamento de formulários com React Hook Form e validações com Zod. Implementado formulário multi-etapas com Zustand para controle de estado e envio automático de pedidos via WhatsApp.',
      features: [
        'Carrinho de compras funcional',
        'Formulário multi-etapas validado com Zod',
        'Envio de pedidos automatizado via WhatsApp',
        'Tema escuro e claro com persistência de preferência',
        'Layout responsivo e moderno com Tailwind CSS',
      ],
    },
  },
  {
    id: 3,
    title: 'Amigo Secreto - Sorteio Dinâmico',
    description:
      'Aplicação fullstack para criação de eventos de Amigo Secreto, com suporte a grupos, cadastro de participantes via CPF e acesso individual ao resultado do sorteio.',
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
        'Criar um sistema completo e seguro para sorteios personalizados de Amigo Secreto, com acesso individual aos resultados e possibilidade de agrupamento dos participantes.',
      solution:
        'Desenvolvimento de um backend com Node.js, Prisma e Docker para persistência e segurança dos dados, e um frontend com Next.js e Tailwind CSS para uma experiência fluida. O sorteio é vinculado a CPF, permitindo acesso único e seguro ao resultado.',
      features: [
        'Criação de eventos de Amigo Secreto com ou sem grupos',
        'Cadastro de participantes com identificação via CPF',
        'Sistema de sorteio automático e seguro',
        'Acesso individual ao resultado via link + CPF',
        'Integração entre frontend Next.js e backend Node.js via API REST',
      ],
    },
  },
];
