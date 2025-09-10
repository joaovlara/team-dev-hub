export interface Member {
  id: number;
  name: string;
  role: string;
  image: string;
  description: string;
  technologies: string[];
  contacts?: {
    linkedin?: string;
    github?: string;
    email?: string;
  };
}

export const members: Member[] = [
  {
    id: 1,
    name: "João Lara",
    role: "Desenvolvedor Full-Stack",
    image: "/images/image.jpg",
    description: "Apaixonado por criar soluções inovadoras e eficientes. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos earum architecto excepturi repellendus harum! Ex quae similique sunt quidem harum ipsam natus fuga, expedita minima suscipit iste eum. Quaerat, ducimus.",
    technologies: ["JavaScript", "TypeScript", "React", "Node.js", "Python"],
    contacts: {
      linkedin: "https://www.linkedin.com/in/joao-vitor-lara/",
      github: "https://github.com/joaovlara",
      email: "joaovitor.lara@gmail.com"
    }
  },
  {
    id: 2,
    name: "Maria",
    role: "Designer UX/UI",
    image: "/images/image.jpg",
    description: "Focada em criar experiências de usuário intuitivas e agradáveis.",
    technologies: ["Figma", "Adobe XD", "Sketch"],
    contacts: {
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/",
      email: "maria@example.com"
    }
  },
  {
    id: 3,
    name: "Pedro",
    role: "Gerente de Projetos",
    image: "/images/image.jpg",
    description: "Liderando a equipe para entregar projetos de alta qualidade no prazo.",
    technologies: ["Jira", "Trello", "Slack"],
    contacts: {
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/",
      email: "pedro@example.com"
    }
  },
  {
    id: 4,
    name: "Ana",
    role: "Especialista em Marketing Digital",
    image: "/images/image.jpg",
    description: "Estratégias criativas para aumentar a presença online e engajamento.",
    technologies: ["Google Analytics", "SEO", "Content Marketing"],
    contacts: {
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/",
      email: "ana@example.com"
    }
  },
  {
    id: 5,
    name: "Lucas",
    role: "Analista de Dados",
    image: "/images/image.jpg",
    description: "Transformando dados em insights acionáveis para o crescimento do negócio.",
    technologies: ["Python", "R", "SQL"],
    contacts: {
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/",
      email: "lucas@example.com"
    }
  },
  {
    id: 6,
    name: "Carla",
    role: "Desenvolvedora Front-End",
    image: "/images/image.jpg",
    description: "Especialista em criar interfaces web responsivas e dinâmicas.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    contacts: {
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/",
      email: "carla@example.com"
    }
  },
];
