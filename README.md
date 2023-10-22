# Canonical Take Home Assessment

## Description
This project was part of a take home assessment to render cards from a [datasource](people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json).

The requirements were to use the above datasource and [vanilla framework](vanillaframework.io/docs).

## Design Decisions
This project was bootstrapped using [Create React App](https://github.com/facebook/create-react-app) due its simplicity and ease of use. No other additional dependencies were used.

The code is contained in 2 files: 
* `App.js` - fetches data on page load
* `components/Card.js` - custom card component to render the data fetched. Cards were styled according to the code in `components/Card.css` to replicate the following styles seen on [this page](https://ubuntu.com/blog). Styles are also imported using a CDN in `index.html`

Each card renders the following content:
* Title
* Image (from `featured_media`)
* Author (as a number since the `author` field in the returned data is a number)
* Date (parsed into a human readable format from the variable `modified`)
* Link (from `link`, which the 'Article' link navigates to)

## How to run and build

## Installation

To install, go inside the root directory that contains the `package.json` and run `npm install`. This will install the necessary dependencies in the `node_modules` directory.

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
