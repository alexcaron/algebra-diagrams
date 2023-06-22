# Algebra Diagrammer

Teachers or students can use this tool to create visual models of simple one-variable equations. They can signup and login to save equations to their account. This is an MVP proof of concept.

<img width="800" alt="Screen Shot 2023-06-22 at 7 24 38 AM" src="https://github.com/alexcaron/algebra-diagrams/assets/6832818/3b0650dd-3992-41b2-8903-99a9e3df6ab3">

_Click blocks to toggle between symbols and concrete dots_
<img width="800" alt="Screen Shot 2023-06-22 at 7 21 23 AM" src="https://github.com/alexcaron/algebra-diagrams/assets/6832818/92fd2413-ce0a-4157-917e-227b858b5c1c">

_Open a drawer with math keyboard_
<img width="800" alt="Screen Shot 2023-06-22 at 7 22 45 AM" src="https://github.com/alexcaron/algebra-diagrams/assets/6832818/e460f964-4bc6-45c5-88b4-f9e4630f27e4">

# Getting started

Prerequisites: Make sure you have MongoDB installed: [Installation Guide]([url](https://www.mongodb.com/docs/manual/installation/))

**Development mode:**

To start the server...
```bash
npm run server-dev
```

To start a client...
```bash
npm run client-dev
```

**Production mode:**

To start the server...
```bash
npm run start
```

To start a client...
```bash
npm run build
```

**Testing:**
```bash
npm run test
```

# Technologies Used

The project utilizes the following technologies in its build:

- Node.js (version 12.22.9) - A JavaScript runtime environment.
- npm (version 8.5.1) - A package manager for Node.js.
- [@cortex-js/compute-engine]([url](https://cortexjs.io/compute-engine/)) (version 0.12.3) - A library for computing algebraic expressions.
- [@cortex-js/math-live]([url](https://cortexjs.io/mathlive/)) - A web component for math input.
- axios (version 1.4.0) - A library for making HTTP requests.
- bcrypt (version 5.1.0) - A library for password hashing.
- dotenv (version 10.0.0) - A module for loading environment variables from a .env file.
- express (version 4.17.1) - A fast and minimalist web framework for Node.js.
- express-session (version 1.17.3) - A middleware for handling sessions in Express.js.
- mongoose (version 7.2.2) - A MongoDB object modeling tool for Node.js.
- passport (version 0.6.0) - An authentication middleware for Node.js.
- passport-local (version 1.0.0) - A Passport strategy for authenticating with a username and password.
- react (version 17.0.2) - A JavaScript library for building user interfaces.
- react-dom (version 17.0.2) - React package for working with the DOM.
- [water.css]([url](https://watercss.kognise.dev/)) - A drop-in collection of CSS styles.

# Limitations

This was part of a two-day MVP build, so the functionality is limited.

With more time, I'd focus on:
- visualizing steps to manipulate an equation (i.e., steps to solve it)
- make the saved equations list clickable to view that equation
- make interactions more smooth on the diagram
- improve handling of negative values

Another idea I may explore is to create a live multi-user interactive mode.

Note that this uses express-session as part of authentication, which is not considered production-grade.
