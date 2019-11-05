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

Include react-router-dom amplify, material-ui and sass

https://material-ui.com

https://www.npmjs.com/package/react-router-dom

https://aws-amplify.github.io/
```
npm install @material-ui/core
npm install @material-ui/icons

npm install --save react-router-dom

npm install aws-amplify-react
npm install @aws-amplify/api @aws-amplify/pubsub
npm install aws-amplify

npm install node-sass
```

Add in your public/index.html to have Roboto
```
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
```

Add auth to your project with email login
```
amplify add auth
```

Copy the `struct` forlder in `src`

Push
```
amplify push
```



Replace App.js by
```
import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";

import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import Routing from './struct/pages/Routing';

Amplify.configure(awsconfig);

function App() {
  return (
    <Router><Routing></Routing></Router>
  );
}

export default App;
```

run `npm start`
You should now have a running app with a basic lateral navigation with one page needing a login
