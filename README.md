# SettleSmart Api

## Installation Guide:
1. Prerequisites: 
    - Node.js
    - npm 

2. Installation Steps:
    - Cloning the repository: git clone repository-url
    - Installing dependencies: npm install 

3. Configuration
    - Environment variables 
        - PORT= value
        - DB_HOST= value
        - DB_LOCAL_DBNAME= value
        - DB_LOCAL_USER= value
        - DB_LOCAL_PASSWORD= value

4. Migrations and seeding data:
    - Migrations: npm run migrate
    - Seed data in the following order:
        - npx knex seed:run --specific=users.js
        - npx knex seed:run --specific=posts.js
        - npx knex seed:run --specific=comments.js

5. Running the app:
    - Runs the app in the development mode: npm run dev

