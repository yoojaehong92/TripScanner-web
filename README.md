##TripScanner-web react

This app consists of the following:

1. [React](https://facebook.github.io/react/) for UI
2. [Babel](https://babeljs.io/) for ES6 and JSX transformation
3. [Webpack](https://webpack.github.io/) for bundling
4. [Redux](http://redux.js.org/) for React Store

The following dev tools are used:

1. [ESLint](http://eslint.org/) to make sure our code is consistent
2. [React Hot Loader](https://github.com/gaearon/react-hot-loader) for instant updates on save

###Install
Run the following commands to install the app:
```
git clone git@github.com:yoojaehong92/TripScanner-web.git
cd TripScanner-web
npm install
```
####Run in production
Run the following command to run the app in production:
```
npm start
```
View the app running in production at [http://localhost:3000](http://localhost:3000)

####Run in development
Run the following commands to run the app in development with hot reloading:
```
npm start server
```
and in another terminal tab run:
```
npm run development
```
View the app running in development at [http://localhost:8080](http://localhost:8080)

###Configure your own app
1. This app need to deploy [TripScanner-rails](https://github.com/kty1965/TripScanner-rails)
2. Edit config.js:
```javascript
// config.js
export default {
  server: {
    host: process.env.APP_URL || 'http://localhost:3000'
  },
  googleMapAPI: 'AIzaSyCVZa1VHc0fu-WhhqW0LCB4_55MwGPLSII',
  apiServer: {
    host: 'http://localhost:3000/api/v1'
  }
}

```
