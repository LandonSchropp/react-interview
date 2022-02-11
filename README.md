# React Interview Problem

This is my personal React development environment for interview problems.

It uses several tools to make development simple and easy.

* [React](https://reactjs.org/): A great frontend UI framework.
* [Gatsby](https://www.gatsbyjs.com/): Gatsby is an platform for building static sites and
  single-page applications with React.
* [Babel](https://babeljs.io/): Babel is a transpiler that allows us to write modern JavaScript
  without waiting for browsers to implement new features.
* [ESLint](https://eslint.org/): ESLint is a static analysis tool that fixes problems and maintains
  code standards. This project uses my [personal ESLint configuration](https://bit.ly/3nTK58a).
* [Jest](https://jestjs.io/): Jest is an awesome testing library that makes JavaScript testing easy.
* [TypeScript Language Server](https://bit.ly/3rH7bkK): Even though the project is written in
  JavaScript and not TypeScript, the TypeScript Language Server still provides many useful
  niceties.

## Setup

This project uses Yarn to manage dependencies. In order to run the code, you'll first install them.

``` bash
yarn install
```

## Running the Application

To run the project's tests, you can use Yarn.

``` bash
yarn test
```

The appliation can be run with `yarn develop`, and can be accessed on
[localhost:8000](http://localhost:8000) by default.
