# Exchange Currency App

#### This App allows you to exchange values from one currency to another, according to the currencies and exchange rates provided by Uphold's API

#### Developed using React, Typescript, Styled-Components, Jest, and Cypress

#### Check the app: https://bmigueldev.github.io/exchange-currency (not working properly - check notes below)

## Instructions to run application in development mode:
- Open command line and navigate to project's folder: "exchange-currency"
- Run command "npm install"
- Run command "npm start" to start application in the browser
- Use a browser extension such as "Moesif Origin & CORS Changer" to deal with the CORS restrictions and be able to access Uphold's API
###### Note: <br /> - The unit tests can be run with the command "npm run test" <br /> - The end to end tests can be run with the command "npx cypress open"; wait for Cypress to open, then navigate to "E2E Testing", choose "Chrome" and click on "Start E2E Testing in Chrome". The tests <u>must</u> be run on the <b>Chrome</b> browser, due to the implemented cypress configuration only allowing the CORS issue to be bypassed while using Chrome. Furthermore, Cypress expects the application to be running on "http://localhost:3000" <br /> - Unfortunately the app deployed at the link above isn't working properly because the provided Uphold's SDK doesn't have an "HTTPS" protocol (so GitHub Pages won't access it). Download the source code and follow the instructions above to see the fully functioning app

## App functionalities:
- Dynamically select a currency (supported by Uphold) to exchange from.
- Show the exchanged currency rate and value for any submitted number (integer or decimal) to any other currency supported by Uphold

## Aspects shown in this project:
- React, Typescript, Styled-Components
- Unit Testing (JEST and React Testing Library)
- Test Driven Development (TDD)
- End to End Testing (Cypress)
- Gitflow Workflow
- Design Cloning (matching give mockup)
- Responsive Design (basic)
- ESLint linting tool (integrated in "Create-React-App")
