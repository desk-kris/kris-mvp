# kris-mvp

This repository contains a minimum viable project.

## Setup

### Dependencies

- On VSCode, open a new terminal. You may rename the terminal `server` for convenience. Run `npm install` in the project directory. This will install server-related dependencies such as `express`.
- On VSCode, open another new terminal. You may rename the terminal `client` for convenience. First, run `cd client`. Once you are in the client directory, run `npm install`. This will install client dependencies (React).

### Database Prep

- Open MySQL Command Line Interface programme. Run `mysql -u root -p`
- Create a new database called krismvp: `create database krismvp;`
- Back to your project folder in VSCode, add a `.env` file to the project folder of this repository containing the MySQL authentication information for MySQL user. For example:

```bash
  DB_HOST=localhost
  DB_USER=root
  DB_NAME=krismvp
  DB_PASS=YOURPASSWORD
```

- Be sure to include .env in your .gitignore file
- On VSCode, in a new terminal window, run `npm run migrate` in the project folder of this repository, . This will create a table called 'projects' in your database.

- Make sure you understand how the `projects` table is constructed. In your MySQL console, you can run `use krismvp;` and then `describe projects;` to see the structure of the projects table.

### Development

- On one terminal, run `npm start` in project directory to start the Express server on port 5000
- In another terminal, do `cd client` and run `npm start` to start the client in development mode with hot reloading in port 3000.

## Notes

_This is a student project that was created at [CodeOp](http://CodeOp.tech), a full stack development bootcamp in Barcelona._
