# 👨‍💻 Employee Management System

:smiley::rocket: Seja bem-vindo ao tutorial para a inicialização da aplicação Employee Management System - BackEnd. Por favor, primeiramente se liga nas orientações logo abaixo, para não ter nenhum problema.

**⚠️Certifique-se de ter previamente o Node.js e o Git instalados em seu computador⚠️**

**⚠️Certifique-se também de ter baixado o repositório⚠️**

**01: Inicialização do programa**

Acesse o diretório:

    cd server

Instale as dependências do projeto usando o gerenciador de pacotes npm ou yarn:

    npm install ou yarn install

**02: Como configurar o Docker**

Primeiro Certifique-se de ter o Docker instalado em sua máquina.

> **Windows** https://docs.docker.com/desktop/install/windows-install/

>**Linux** https://docs.docker.com/desktop/install/linux-install/

No arquivo docker-compose.yml configure as informações como POSTGRES_USER e POSTGRES_PASSWORD de acordo com as informações do seu Banco de Dados.

Na pasta raiz do seu projeto execute o seguinte comando para iniciar o docker

    docker-compose up -d

Pronto, seu docker está configurado.

**03: Configurar o Arquivo .env**

Crie um arquivo .env na raiz do projeto e defina as seguintes variáveis de ambiente:

    DATABASE_URL="postgres://username:password@localhost:5432/nome_do_banco"

Certifique-se de substituir username e password pelas suas credenciais de acesso ao banco de dados PostgreSQL.

**04: Execute as migrações do banco de dados para criar as tabelas necessárias:**

    npx prisma migrate dev

		    ou

    yarn prisma migrate dev

**05: Execute o comando abaixo para a aplicação rodar:**

    npm run dev

	    ou

    yarn dev

Sucesso! :rocket::rocket::rocket: Employee Management System estará disponível em http://localhost:3333/. Você pode acessar esta URL em seu navegador para utilizar o projeto.



