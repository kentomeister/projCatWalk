# projCatWalk
This repo contains a product overview project for an onkine e-commerce website. 

## Tech Stack

This project uses a number of open source projects to work properly:

- [node.js] - evented I/O for the backend
- [Express] - HTML enhanced for web apps!
- [React] - Frontend Framework
- [markdown-it] - Markdown parser done right. Fast and easy to extend.

## Team Members:
- Alex Zinn
- Raju Gharti
- Ryan Pannone
- Tomas Rodriguez

## SETUP
Run the following command in the terminal:
- npm install
- create a _.env_ file in the root directory with the following info:
  ```
  GITHUB_TOKEN= *** YOUR GITHUB API TOKEN GOES HERE ***
  PORT=3000
  API_URL=https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe
  NODE_ENV=development

  ```
- open two terminal windows
    - terminal 1: npm run dev-server
    - terminal 2: npm run dev-client

Navigate to http://localhost: **port specified in .env file** in chrome
