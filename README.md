# Exchange Currency App

#### This App allows you to exhange values from one currency to another, according to the currencies and exchange rates provided by Uphold's API

#### Developed using React, Typescript, Styled-Components and Jest

#### Check the app: https://bmigueldev.github.io/exchange-currency (check notes below)

## Instructions to run application in development mode:
- Open command line and navigate to project's folder: "exchange-currency"
- Run command "npm install"
- Run command "npm start" to start application in the browser
- Use a browser extension such as "Moesif Origin & CORS Changer" to deal with the CORS restrictions and be able to access the API
###### Note: <br /> - The unit tests can be run with the command "npm run test" <br /> - Unfortunately the app deployed at the link above isn't working properly because the provided Uphold's SDK doesn't have an "HTTPS" protocol. Download the source code and follow the instructions above to see the complete app.

## App functionalities:
- Show the exchanged currency value of any submitted number to other currencies supported by Uphold
- Select a currency (supported by Uphold) to exchange from.

## Aspects shown in this project:
- React, Typescript, Styled-Components
- Unit Testing (JEST and React Testing Library (RTL))
- Test Driven Development (TDD)
- Gitflow Workflow
- ESLint linting tool (integrated in "Create-React-App")
