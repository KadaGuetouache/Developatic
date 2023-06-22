# User Management Web Application

The User Management Web Application is a powerful and efficient solution designed to manage users for your mobile application. It provides a user-friendly interface built with Laravel, React.js, Inertia.js, and Ant Design (Antd) components, offering a seamless experience for managing user accounts, authentication, and user data.

## Installation

To set up the User Management Web Application, follow the steps below:

Clone the repository to your local development environment:

`git clone https://github.com/KadaGuetouache/Developatic.git`

Install the necessary dependencies by navigating to the project directory and running the following command:

`composer install && npm install`

Configure the environment variables by creating a .env file and updating the necessary values:

`cp .env.example .env`

Set up your database configuration in the .env file:

```
DB_CONNECTION=mysql
DB_HOST=your_database_host
DB_PORT=your_database_port
DB_DATABASE=your_database_name
DB_USERNAME=your_database_username
DB_PASSWORD=your_database_password
```

Run the database migrations and seed the necessary data:

`php artisan migrate --seed`

Compile the assets and start the application:

`npm run dev && php artisan serve`

Access the application in your browser at http://localhost:8000.

License
The User Management Web Application is open-source software released under the MIT License. You are free to use, modify, and distribute this software as per the terms of the license.
