# [🎬 SeriesHub](https://sgomesaquilla.github.io/Series_Hub-sistema-frontend)

## Nome: `Áquilla Siqueira Gomes`

Sistema web desenvolvido em React para gerenciamento de séries, permitindo cadastrar, listar, editar e excluir séries assistidas.

Este projeto foi desenvolvido como parte da disciplina de Sistemas Frontend.

---

## 📋 Funcionalidades

* Cadastro de séries
* Listagem de séries cadastradas
* Edição de séries existentes
* Exclusão de séries
* Navegação entre páginas utilizando React Router
* Persistência de dados
* Interface baseada em componentes React

---

## 🛠️ Tecnologias Utilizadas

* React
* Bootstrap
* Vite
* React Router DOM

---

## 🚀 Como Executar o Projeto

### Pré-requisitos

* Node.js instalado
* NPM instalado

### Instalação

Clone o repositório ou extraia o arquivo compactado do projeto.

Dentro da pasta series-Hub, instale as dependências:

```bash
cd series-hub
```

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

O projeto conta com testes unitários para os principais componentes, escritos com **Jest** e **React Testing Library**. Os testes garantem que a interface renderiza corretamente os dados e que as interações do usuário (como cliques em botões) funcionam como esperado.

### O que é testado

**`Navbar.test.jsx`**
* Renderização do logo "SerieJournal"
* Renderização dos links de navegação (Home, Séries, Sobre)
* Verificação se os links apontam para as rotas corretas (`/`, `/series`, `/sobre`)

**`SerieCard.test.jsx`**
* Renderização correta dos dados da série (título, diretor, produtora, categoria)
* Renderização dos botões de ação (Editar e Excluir)
* Chamada da função `onDelete` com o `id` correto ao clicar em "Excluir"

### Pré-requisito: API serieJournal-api

Para que o projeto funcione plenamente — incluindo o consumo de dados real durante a execução dos testes e do app — é necessário que ele se comunique com a API **serieJournal-api**, disponibilizada pela PUCRS no repositório [DesenvolvimentoFrontend](https://github.com/adsPucrsOnline/DesenvolvimentoFrontend/) (branch `main`).

**Para executar a API:**

1. Clone o repositório localmente
2. No mesmo terminal, entre na pasta da API:
   ```bash
   cd ./DesenvolvimentoFrontend/serieJournal-api/
   ```
3. Instale as dependências e inicie o servidor:
   ```bash
   npm install
   npm start
   ```

**Rotas disponíveis na API:**

| Método | Rota | Descrição |
|---|---|---|
| GET | `http://localhost:5000/series` | Devolve uma lista de séries |
| GET | `http://localhost:5000/series/:id` | Devolve uma série por id |
| POST | `http://localhost:5000/series` | Cadastra uma nova série |
| PUT | `http://localhost:5000/series` | Atualiza os dados de uma série |
| DELETE | `http://localhost:5000/series/:id` | Remove uma série por id |

### Como executar os testes

Dentro da pasta do projeto, execute:

```bash
npm test
```

Para executar os testes em modo de observação (re-executando automaticamente a cada alteração de código):

```bash
npx jest --watch
```

> Os arquivos de teste estão localizados na pasta `src/tests`, seguindo o padrão de nomenclatura `*.test.jsx`.

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
├── api
│   └── api.js
│
├── components
│   ├── Navbar.jsx
│   └── SerieCard.jsx
│
├── pages
│   ├── Formulario.jsx
│   ├── Home.jsx
│   ├── Listagem.jsx
│   └── Sobre.jsx
│
├── tests
│   ├── Navbar.test.jsx
│   └── SerieCard.test.jsx
│
├── App.jsx
└── main.jsx
```

---

## Telas

Segue abaixo imagens das telas do app na versao desktop e mobile.

### Home

![/home](./imgs/Home.png)
![/home](./imgs/Home_mobile.png)

### Series

![/series](./imgs/Series.png)
![/series](./imgs/Series_mobile.png)

### Sobre

![/sobre](./imgs/Sobre.png)
![/sobre](./imgs/Sobre_mobile.png)

### Cadastrar/Editar

![/cadastrar](./imgs/Cadastrar.png)
![/editar](./imgs/Editar.png)