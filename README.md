- Criar projeto node e entrar no diretório do projeto
- Instalar devDependecies: typescript, @types/node, tsx, prisma, @biomejs/biome
- Gerar arquivo tsconfig.json com comando `npx tsc --init` e adicionar configurações recomendadas para a versão do NodeJS utilizada. Adicionar opções de outDir e sourceDir
- Instalar standard dependencies: fastify, @fastify/cors e @prisma/client
- Adicionar esses script ao `package.json`:
  ```json
  "scripts": {
		"dev": "tsx watch src/index.ts",
		"build": "prisma generate && tsc",
		"start": "node dist/index.js"
	},
  ```
- Criar arquivo `vercel.json` na raiz do projeto, contendo:
  ```json
  {
	"version": 2,
    "builds": [
      {
        "src": "src/index.ts",
        "use": "@vercel/node"
      }
    ],
    "routes": [
      {
        "src": "/(.*)",
        "dest": "src/index.ts"
      }
    ]
  }
  ```
- Criar arquivo src/index.ts com setup da api
- Criar arquivo routes/userRoutes.ts com endpoints de users. Fazer registro do plugin na api
- Executar `npx prisma init --datasource-provider postgresql --output ./prisma` para gerar schema.prisma e alocar config no diretório prisma
- Executar `npx prisma generate` para gerar o prisma client no diretório de output
- Adcionar model User e executar `npx prisma migrate dev --name addUser` para aplicar as alterações ao BD
- Configurar singleton para Prisma Client (importar prisma client do diretório prisma do output)
- Criar arquivo services/addUser.ts com função para salvar user
- Alterar endpoint POST `/users` para executar service `addUser`
- Adicionar a seguinte linha no schema.prisma:

  ```json
  generator client {
    provider = "prisma-client-js"
    // Adicione ou modifique a linha 'binaryTargets' abaixo:
    binaryTargets = ["native", "rhel-openssl-3.0.x"]
  }
  ```
- Executar `npx prisma generate` novamente para baixar os binários especificados (Windows e Linux) e atualizar o Prisma Client gerado dentro de `node_modules/.prisma/client`
- Modificar o script build no seu package.json, para garantir que `prisma generate` seja executado antes de compilar seu TypeScript (`tsc`)

  ```json
  "scripts": {
    "build": "prisma generate && tsc", // Adicione "prisma generate &&" antes do tsc
    "start": "node dist/server.js",
    // ... outros scripts
  },
  ```