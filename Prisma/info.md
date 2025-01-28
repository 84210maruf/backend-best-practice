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

# 
#
#
#
#

 Usage

      $ prisma [command]

    Commands

                init   Set up Prisma for your app
            generate   Generate artifacts (e.g. Prisma Client)  
                  db   Manage your database schema and lifecycle
             migrate   Migrate your database
              studio   Browse your data with Prisma Studio      
            validate   Validate your Prisma schema
              format   Format your Prisma schema
             version   Displays Prisma version info
               debug   Displays Prisma debug info