# real-time-chat-rooms
Quick socket.io implementation for my studies purposes. The application allows to create chat rooms. Every room is automatically removed after last member disconnection.
Database is used to hold rooms, messages history and users sessions. I used Sequelize as an ORM and ejs as a view engine.

## Setup
Copy .env.example to .env and fill it with a correct data.

```bash
$ yarn
$ yarn db:migrate
$ yarn watch
```
