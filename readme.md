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