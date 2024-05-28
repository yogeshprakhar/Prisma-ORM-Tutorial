## Use prisma from scratch
Step 1 - npm init -y <br/>
Step 2 - npm i prisma typescript ts-node @types/node --save-dev <br/>
Step 3 - npx tsc -init <br/>
Step 4 - npx prisma init <br/>
Step 5 - Add models in prisma.client file <br/>
Step 6 - after create model use "npx prisma migrate dev --name UserAndTodoAdded <br/>
Step 7 - run 'npx prisma generate' <br/>
Step 8 - write code in index.ts <br/>
Step 9 - tsc -b <br/>
Step 10 - node dist/index.js
