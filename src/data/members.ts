export interface Member {
  id: number;
  name: string;
  role: string;
  image: string;
  description: string;
}

export const members: Member[] = [
  {
    id: 1,
    name: "João",
    role: "Desenvolvedor Full-Stack",
    image: "/images/members/joao.jpg",
    description: "Apaixonado por criar soluções inovadoras e eficientes. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos earum architecto excepturi repellendus harum! Ex quae similique sunt quidem harum ipsam natus fuga, expedita minima suscipit iste eum. Quaerat, ducimus.",
  },
  {
    id: 2,
    name: "Maria",
    role: "Designer UX/UI",
    image: "/images/members/maria.jpg",
    description: "Focada em criar experiências de usuário intuitivas e agradáveis.",
  },
  {
    id: 3,
    name: "Pedro",
    role: "Gerente de Projetos",
    image: "/images/members/pedro.jpg",
    description: "Liderando a equipe para entregar projetos de alta qualidade no prazo.",
  },
  {
    id: 4,
    name: "Ana",
    role: "Especialista em Marketing Digital",
    image: "/images/members/ana.jpg",
    description: "Estratégias criativas para aumentar a presença online e engajamento.",
  },
  {
    id: 5,
    name: "Lucas",
    role: "Analista de Dados",
    image: "/images/members/lucas.jpg",
    description: "Transformando dados em insights acionáveis para o crescimento do negócio.",
  },
  {
    id: 6,
    name: "Carla",
    role: "Desenvolvedora Front-End",
    image: "/images/members/carla.jpg",
    description: "Especialista em criar interfaces web responsivas e dinâmicas.",
  },
];
