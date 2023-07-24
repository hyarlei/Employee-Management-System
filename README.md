# Employee-Management-System

como configurar ESlint
crie na raiz do projeto o arquivo .eslint e cole o seguinte codigo.

```javascript
module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    es6: true,
    node: true,
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "standard",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {},
};
```

Clone o repositório em seu computador

### git clone https://github.com/hyarlei/Employee-Management-System.git

Acesse o diretório do projeto

### `cd Employee-Management-System`

Instale as dependências do projeto usando o gerenciador de pacotes npm ou yarn:

npm install ou yarn install

Crie um arquivo .env na raiz do projeto e defina as seguintes variáveis de ambiente:

DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"

Certifique-se de substituir username e password pelas suas credenciais de acesso ao banco de dados PostgreSQL.

Execute as migrações do banco de dados para criar as tabelas necessárias:

npx prisma migrate dev

ou

yarn prisma migrate dev

npm run dev

ou

yarn dev

O petwalk-api estará disponível em http://localhost:3333/. Você pode acessar esta URL em seu navegador para utilizar o projeto.
