# Team Dev Hub

Este é um projeto de landing page para uma equipe de desenvolvimento, criada com Next.js e TypeScript.

## 🚀 Tecnologias Utilizadas

- **Next.js** - Framework React para produção.
- **TypeScript** - Superset do JavaScript com tipagem estática.
- **Tailwind CSS** - Framework CSS para estilização rápida e moderna.
- **React** - Biblioteca para construção da interface.
- **Lucide React** - Biblioteca de ícones.

## 📁 Estrutura do Projeto

```
my-app/
├── public/                 # Arquivos públicos estáticos
│   └── images/
├── src/                    # Código fonte da aplicação
│   ├── app/                # Rotas da aplicação
│   │   ├── about/
│   │   ├── equipe/
│   │   ├── publicador/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/         # Componentes React reutilizáveis
│   │   ├── Cards/
│   │   ├── CollapsibleContact/
│   │   ├── Footer/
│   │   ├── Hero/
│   │   ├── MemberProfile/
│   │   └── Navbar/
│   └── data/               # Dados estáticos da aplicação
│       ├── about.ts
│       ├── colors.ts
│       ├── members.ts
│       └── texts.ts
├── next.config.ts          # Configuração do Next.js
├── tailwind.config.js      # Configuração do Tailwind CSS
├── package.json            # Dependências e scripts
└── README.md               # Este arquivo
```

## 💻 Como Executar o Projeto

### Pré-requisitos
- Node.js (versão 20 ou superior)
- npm, yarn ou pnpm

### Instalação e Execução

1. **Clone o repositório:**
```bash
git clone https://github.com/joaovlara/team-dev-hub.git
cd my-app
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Execute o projeto em modo de desenvolvimento:**
```bash
npm run dev
```

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000).

### Scripts Disponíveis

- `npm run dev` - Executa o projeto em modo de desenvolvimento com Turbopack.
- `npm run build` - Gera a versão de produção da aplicação.
- `npm run start` - Inicia o servidor de produção.
- `npm run lint` - Executa o linter para verificar a qualidade do código.
