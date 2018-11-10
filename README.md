This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run scaffold <componentName>`

**Note: to create a react component. first you should change directory to src/components!**

Running this would create a component directory with the name passed as argument and add 3 files same as the component name 

In that directory, for ex. 
`cd src/components`
`npm run scaffold App`
would create App folder and add 3 files, 

App.js (with default react component), App.css, App.spec.js (with default snapshot test)   

### `npm run lint`

Added linting and prettier to the project for consistency of code and js coding conventions

Running this script would throw errors in js like extra spaces and trailing commas etc.

To fix mistakes use `npm run lint -- --fix` this would fix most of common mistakes

### Git hooks (pre-commit and pre-push)

Before every commit git hooks would test lint the code

Before every push all test cases would be run. 

More on [Git Hooks](https://githooks.com/) 

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
