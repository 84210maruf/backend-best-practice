*** initial command for Node App Using Prisma ORM ***
# npm init -y
# npm i --save-dev prisma typescript ts-node @types/node nodemon
* create tsconfig.json [root path]
 
  *** Using POSTGRESQL ***

# npx prisma init --detasource-provider postgresql
* inside .env edite with[user,password,host,port,database] base_url based on your local postgreSQL detabase 
* inside schema.prisma create a model
# npx prisma migrate dev --name init [Initial migration]
# npx prisma migrate dev  [after chenge model] if given error run [npm run devStart] then migrate again
# npm i @prisma/client
# npx prisma generate
* then create script.ts and add prisma client code
***RUN server***
# nodemon script.ts


*** using MongoDB ***

*** Setup Prisma and mongoDB from scrach ***

# bun i prisma --sev-dev    
# bunx prisma 
# bunx prisma init    

* create [.env] file and define [BASE_URL="connection_string] for [mongodb/postgresql/mysql] etc" and inside [prisma/schema.prisma] Edite [provider="mongodb"]OR [provider="postgresql"] whatever you want

* after create a schema or change anything in [prisma/schema.prisma] run cmd below
  # npx prisma db push                                       
  # npx prisma studio [for see database]

# bun add @prisma/client [and create [lib/prisma.ts] and configure]
# bun dev [start_server] 









[Usage]

      $ prisma [command]

                init   Set up Prisma for your app
            generate   Generate artifacts (e.g. Prisma Client)  
                  db   Manage your database schema and lifecycle
             migrate   Migrate your database
              studio   Browse your data with Prisma Studio      
            validate   Validate your Prisma schema
              format   Format your Prisma schema
             version   Displays Prisma version info
               debug   Displays Prisma debug info