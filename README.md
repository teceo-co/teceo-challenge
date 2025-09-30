# teceo-challenge

o repositório contém duas aplicações:

1. frontend construído em vite (react js).
2. backend construído em nest js (node js).

---

## pré-requisitos

- [node.js >= 22](https://nodejs.org/).
- [yarn](https://yarnpkg.com/).
- [docker](https://docs.docker.com/) e [docker compose](https://docs.docker.com/compose/).

---

## configurando o frontend

1. acesse o diretório `/frontend`.
2. execute o comando `yarn` para instalar as dependências.
3. inicie a aplicação executando o comando `yarn dev`.

## configurando o banco de dados

o banco de dados é postgres, e roda em um container docker.

1. dentro do diretório `/backend/docker`, suba o container docker executando o comando `docker-compose up -d`.
2. baixe o dump clicando nesse link: <https://drive.google.com/file/d/1xmdnUQapZicoerijiCypv36_n5suO3DF/view?usp=drive_link>.
3. após baixar o dump, crie uma cópia do dump para dentro do docker executando `docker cp file.dump teceo-challenge-postgres:file.dump`.
4. para restaurar o dump, execute o comando `docker exec postgres pg_restore  -h localhost -p 5432 -U teceo -d teceo -v file.dump`.

## configurando o backend

1. acesse o diretório `/backend`.
2. crie um arquivo `.env` na raiz do diretório `/backend` com os mesmos dados do arquivo `.env.example`.
3. execute o comando `yarn` para instalar as dependências.
4. inicie a aplicação executando o comando `yarn start:dev`
