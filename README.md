# guestManagementSystem_Angular7
MEAN APP
front-end: Angular 7, HTML CSS JS & Bootstrap
back-end: MONGODB (free)
middleware: JWT, CORS, NodeJS, Express etc.

Before we start, Please make sure you have latest version of node js installed.
Let's head out to https://nodejs.org/en/ and grab latest nodejs.
Once you have nodejs installed, open command prompt/terminal window.
$ node -v // make sure, this command comes back with a node version
$ npm -v // make sure, this command comes back with a npm version

$ npm install -g @angular/cli
$ mkdir app
$ cd app
$ mkdir client
$ mkdir server
$ cd client
$ ng new project-name
$ cd project-name
$ ng serve

Back end :-
$ cd server
$ npm init
$ npm install --save nodemon cors express dotenv jsonwebtoken mongoose bcrypt@3.0.1 body-parser
$ nodemon app
