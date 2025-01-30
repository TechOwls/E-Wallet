# E-wallet
---
## Functions

### Spendings
    - Add your spendings
    - Edit your spendings
    - Delete your spendings

### Graphs
    - Weekly spendings
    - Monthly spendings

### Categories
    - Add a category 
    - Add some description
    - Category wise graphings



---

# For devs

## Tech stack:
    - Laravel
    - React
    - Tailwind
    - MySQL
    - Laravel Breeze for authentication
    - Inertia for rendering

## Running the application
    - clone the code from your IDE (VS code maybe)
    - composer install 
    - npm install
    - npm run build
    - cp .env.example .env (to copy the .env.example this is where we store important stuff)
    - php artisan key:generate (this will generate the key)
    
update the .env file with your database information
once done migrate the db

    - php artisan migrate (this will update the schema from the code to your db)
    - php artisan serve  (this should start the backend server)
    - npm run dev    (use another terminal inside the IDE, this will start the frontend)

## Some things to consider
    - You need PHP and Node (use herd download it) : https://herd.laravel.com/windows
    - Node version: 22.9.0
    - PHP version: 8.3.13
    - WorkBench MySQL: https://www.mysql.com/downloads/   (download the community version)

Have fun guys
    
