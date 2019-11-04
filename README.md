# react-amplify-basic-app
React boilerplate including Amplify (auth), Material ui and react-dom-router 

## Quickstart
Create your new project
```
npx create-react-app my-app
cd my-app
```

If you don't have the Amplify client, install it
```
npm install -g @aws-amplify/cli
amplify configure
```

Once it is done init your project:
```
amplify init
```

Include react-router-dom amplify and material-ui
https://material-ui.com
https://www.npmjs.com/package/react-router-dom
```
npm install @material-ui/core
npm install @material-ui/icons

npm install --save react-router-dom

npm install aws-amplify-react
npm install @aws-amplify/api @aws-amplify/pubsub
```

Add in your public/index.html to have Roboto
```
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
```

Add auth to your project
```
amplify add auth
```
