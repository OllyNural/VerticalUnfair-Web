# VerticalUnfair Server FrontEnd

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 

(With extra :sparkle: from Olly Nural)

## Description

React App for the FlatBond application.

### Installation

`npm install`

### Running

This should be run alongside the front end application found [here:](https://github.com/OllyNural/VerticalUnfair-Web).

**Run using:**

`npm run start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### Changing Fixed Membership Fee value
By default, the user passed will NOT have a fixed membership fee.

If you want to change this to fixed, edit the /src/components/Container/Container.js CLIENT_ID variable to 2.

### Tests

Run Tests using: 

```npm run test```

### Build

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.



### Assumptions

* Prices in Pence
* Client ID decided where? Assumed it is in browser from some sort of login session
* With the contracts given, can't do full validation: We only pass in the rent. This means any calculation between month -> week of rent value is done client-side and can't be validated. 

### Things left to do

* Front End Validation
* Hella, hella, hella tests 
* Feedback for unsuccessful POST request to submit for (at the moment, nothing happens) (more spinny loaders)