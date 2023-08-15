TECH INFORMATION

--> Tech used in this project
    -> React
    -> Firebase Firestore Realtime database (for database)
    -> Material UI (for designing ui)
    -> React Router (for routing different components using "/")
    -> React Context API
    -> Redux
    -> Google Authentication
    -> Deployment using FireBase

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

SETTING UP PROCESS

--> Create react app using command
    -> npx create-react-app chatgram
    -> it will create a folder named chatgram with all the react modules and components we need to intiate

--> Setting up FireBase
    -> Setting up firebase is essential to power the entire backend for this project, as we will use to power authentication, database, and when we deploy it all the hosting functionality is done using FireBase.

    -> On the web browser go to firebase.google.com
    -> Click on 'Go to console' button
    -> Click on 'Create a project'
    -> Follow the instructions on the screen -- this will create a project on FireBase
    -> Click on setting button -- Project Setting -- then choose we app icon all the way bottom on the page
    -> Register for the web application here by following the informations on the screen
    -> Run all the commands in cmd to install firabase globally
    -> After all steps we'll redirect to the Dashboard, here all the way down we can see three switches, out of them click on config
    -> copy the configuration code from there and then make a new file in the chatgram/src named firebase.js and paste the code in it

--> Get inside the chatgram folder in terminal
    -> run the command 'npm start', development server of react js should be started now on localhost

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

CLEAN UP PROCESS

--> We gonna delete some files now
    -> Delete App.test.js, logo.svg and setupTests.js
    -> Now let's code in App.js
    -> Clean up everything inside the App.css to get rid of css applied by default react app
    -> Now get inside the index.css and update that
    -> we are done with cleaning up the things

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

LETS BUILD THE APP

-> One thing to keep in mind while creating a new component that we should export that component as default and import the component in that component which will be using the created component

-> Update App.js for the body of the react app, and App.css for styling that page
-> Create files for sidebar which will contains sidebar
    -> Sidebar.js and Sidebar.css

-> Install the Material UI for some designing components and icons
    -> run the command 'npm install @mui/material @emotion/react @emotion/styled'

-> create files for all the chat rooms to be shown on sidebar
    -> SidebarChat.js and SidebarChat.css

-> create files for the right section where particular opened chat will be displayed
    -> Chat.js and Chat.css

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

SETTING UP FIRESTORE DATABASE IN FIREBASE

-> Install firebase if not yet using terminal
    -> get inside the project folder in the terminal
    -> install firebase using command "npm i firebase"
    -> create consts on the firebase.js so we can use some functionalities like databse, authentication, and google authentication
    -> go to firbase.google.com again and click on Build at left sidebar then choose Firestore Database
    -> Create database in test mode and follow the instructions, database will be created
    -> Click on Start Collection to create a new Collection also create unique ID for the collection by clicking on the auto id button
    -> Map all the names and id we have given in the database to the sidebar.js const, so it will render in realtime whenever user add a new room

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

INSTALLING REACT ROUTER

--> React router is needed to render the chat into the chat screen
    -> Whenever user click one of the chat from the sidebar then that chat will get render to the right section where they can chat and see messages
    -> to install react router go to the terminal and get inside the project folder and use this command "npm i react-router-dom"
    -> then we will create a Router containing the Switch, switch will redirect different route based on the path
    
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

GOOGLE LOGIN

--> For google login we introduce google authentication into the app also gonna be use react context API
    -> Create Login.js componentin src folder
    -> after code all up go to firebase again.
    -> go to authentication and get started and set up sign in method with google, then choose enable and set the project support email and save

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

FIREBASE DEPLOY

--> Install firebase in the project folder using if not yet
  == we have simple three steps to deploy the website
  -> Login using your credentials of firebase
    -> firebase login
    -> firebase init (this will initiate the deployemeny, it will ask some points, choose them accordingly)
    -> firebase deploy
  -> Your website will be deployed with a URL, in the case of my porject url is https://chatgram-ba3a9.web.app/
    

# You can check the web app via this link
https://chatgram-ba3a9.web.app/


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
