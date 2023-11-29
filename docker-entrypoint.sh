#!/bin/bash

# Aguarda até que o MySQL esteja pronto
while ! nc -z mysql 3306; do
  sleep 1
done

# Executa o comando do Prisma para aplicar as migrações
npx prisma migrate dev --name ola_mundo

# Inicia sua aplicação
npm run start