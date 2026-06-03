# 🎬 SeriesHub

Sistema web desenvolvido em React para gerenciamento de séries, permitindo cadastrar, listar, editar e excluir séries assistidas.

Este projeto foi desenvolvido como parte da disciplina de Sistemas Frontend (Fase 1).

---

## 📋 Funcionalidades

* Cadastro de séries
* Listagem de séries cadastradas
* Edição de séries existentes
* Exclusão de séries
* Navegação entre páginas utilizando React Router
* Persistência local utilizando Local Storage
* Interface baseada em componentes React

---

## 🛠️ Tecnologias Utilizadas

* React
* TypeScript
* Vite
* React Router DOM

---

## 🚀 Como Executar o Projeto

### Pré-requisitos

* Node.js instalado
* NPM instalado

### Instalação

Clone o repositório ou extraia o arquivo compactado do projeto.

Instale as dependências:

```bash
npm install
```

### Executando o Projeto

```bash
npm run dev
```

Após iniciar o servidor, acesse:

```txt
http://localhost:5173
```

---

## 🧪 Testes

Nesta fase do projeto não foram implementados testes automatizados.

---

## 🧩 Componentes do Projeto

### NavBar

Responsável pela navegação principal da aplicação.

Funções:

* Acesso à página inicial
* Acesso à página de cadastro
* Acesso à página de listagem

---

### SerieForm

Componente responsável pelo formulário de cadastro e edição de séries.

Campos disponíveis:

* Título
* Número de Temporadas
* Data de Lançamento
* Diretor
* Produtora
* Categoria
* Data em que assistiu

Também é reutilizado na funcionalidade de edição.

---

### SerieList

Componente responsável pela exibição das séries cadastradas.

Funcionalidades:

* Exibição dos dados da série
* Botão de edição
* Botão de exclusão

---

## 📂 Estrutura do Projeto

```txt
src
│
├── components
│   ├── NavBar
│   ├── SerieForm
│   └── SerieList
│
├── data
│   └── mockSeries
│
├── pages
│   ├── Home
│   ├── Cadastro
│   ├── Series
│   └── Editar
│
├── routes
│   └── AppRoutes
│
├── App.tsx
└── main.tsx
```

---

## 💾 Persistência dos Dados

Para a Fase 1 foi utilizada a API Local Storage do navegador para armazenar os dados cadastrados.

Essa abordagem permite:

* Manter os dados após atualizar a página;
* Simular persistência sem necessidade de backend;
* Atender aos requisitos de CRUD estático da etapa atual do projeto.

---

## 📌 Decisões de Desenvolvimento

Durante o desenvolvimento foram tomadas as seguintes decisões:

* Utilização do Vite para inicialização do projeto;
* Utilização de TypeScript para maior segurança e organização do código;
* Utilização do React Router DOM para estruturação da navegação entre páginas;
* Reutilização do componente SerieForm para cadastro e edição;
* Utilização de Local Storage para persistência local dos dados;
* Manutenção de dados iniciais através de um arquivo mockSeries para facilitar demonstrações e testes.