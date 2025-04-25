# 📇 GitHub Profile Cards

Este projeto foi desenvolvido com **React + TypeScript** e tem como objetivo demonstrar o uso de diferentes abordagens de estilização em um mesmo componente, utilizando:

- **Tailwind CSS**
- **Styled-Components**

A aplicação consome a **API pública do GitHub** para buscar dados de perfis e exibi-los em um **card de apresentação**.

## 🚀 Funcionalidades

- Busca de usuário do GitHub via API pública (`https://api.github.com/users/{nome_usuario}`)
- Componente `ProfileCard` reutilizável
- Duas rotas:
  - `/tailwind` → Card estilizado com **Tailwind CSS**
  - `/styled` → Card estilizado com **Styled-Components**
- Campo de busca e exibição de:
  - Foto de perfil
  - Nome
  - Nome de usuário (`login`)
  - Bio (descrição)

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── ProfileCard.tsx         # Componente principal com lógica de busca
│   ├── TailwindCard.tsx        # Estilização com Tailwind
│   └── StyledCard.tsx          # Estilização com Styled-Components
├── pages/
│   ├── TailwindProfile.tsx     # Rota com Tailwind
│   └── StyledProfile.tsx       # Rota com Styled
├── App.tsx                     # Página inicial com os links das rotas
└── main.tsx                    # Configuração de rotas
```

## 🧰 Tecnologias Utilizadas

- [React](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Styled-Components](https://styled-components.com/)
- [Axios](https://axios-http.com/)
- [React Router DOM](https://reactrouter.com/)

## 📦 Instalação e Execução

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm

### Passos

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/github-profile-cards.git
cd github-profile-cards
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

4. Acesse no navegador:

```
http://localhost:5173
```

## 🌐 Navegação

- Página inicial (`/`) → escolha entre as versões
- `/tailwind` → mostra o card com Tailwind CSS
- `/styled` → mostra o card com Styled-Components

## 💡 Observação

- A API do GitHub possui uma **limitação de requisições anônimas por hora** (60/hora). Evite testar com muitas buscas consecutivas sem autenticação.
- O projeto funciona em qualquer máquina com Node.js instalado e segue as boas práticas de organização de código e reutilização de componentes.

## 🧑‍💻 Autor

Desenvolvido como atividade prática para aplicar conceitos de React, consumo de APIs e comparação entre métodos de estilização em componentes.
