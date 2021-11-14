## WorldOnFire

Is a news website using [newsapi](https://newsapi.org/) API.
This project is created with:
Laravel, Inertia.js, React, Redux, Docker, Tailwindcss, Typescript, etc.

## Main features

-   Accounts
-   Search
-   Favorites

## Hosting

1. Download the source code
   `git clone https://github.com/skindervik/worldonfire.git`
2. Enter the folder
   `cd worldonfire`
3. Install the necessary components with [composer](https://getcomposer.org/download/)
   `composer install`
4. Create .env file, use the .env.example file.
5. Generate app key
   `php artisan key:generate`
6. Add api key from [newsapi](https://newsapi.org/) to your .env file
   `API_KEY=YOUR_KEY`
7. Launch the project with [docker](https://laravel.com/docs/8.x/sail)
   `./vendor/bin/sail up`
8. Migrate the Database
   `./vendor/bin/sail artisan migrate`
