React Router + Server Side Rendering + Code Splitting
=====================================================

What I wanted to achieve here is:
**Have a webapp that has SEO indexing and has a very short loading time on mobile devices with 3G connections**

The goal of this example is to provide a boilerplate ready for
production, simultaneously taking advantage of ReactRouter, 
server side rendering and code splitting to achieve this objective.

The solution was created combining:
* https://github.com/webpack/react-webpack-server-side-example
* https://github.com/ryanflorence/example-react-router-server-rendering-lazy-routes


For the server side, only the React modules are transpilled through Babel, 
the server code is vanilla Node ES6 Javascript. This facilitates debugging
through VSCode, as you can place breakpoints directly in your server code.
The drawback is that it limits the usage of ES6 features, limiting to what is 
currently implemented by Node.

I consider easy debugging a very important feature for software development,
and I chose this solution for this reason. You can modify webpack's server 
configuration to transpile the whole server code if you wish so.

## How it works
* For code splitting, the system uses webpack require.ensure - [see more here](https://webpack.github.io/docs/code-splitting.html)
* The code splitting is strategically placed on dynamic routes to split the code based on the current URL - [see more here](https://github.com/ReactTraining/react-router/blob/master/docs/guides/DynamicRouting.md)
* For the server side rendering work, it transpiles the RootRoute and renders the HTML on string that is sent back to the client

## What to improve
* The server code is unecessarily being code splitted. 
One possible solution would be to create dynamic require function, that uses the
Define.plugin to know if the code is being transpiled for the server or for the client.


## Running

```
npm install
npm start
open http://localhost:5000
```

## Development
To speed up builds while developing, webpack will watch the modification 
of React files and automatically update the builds for client and server rendering.

```
npm run watch
```


## Building
If you prefer to manually trigger a new build. *You can setup VSCode to build with cmd+shft+B.*

```
npm run build
```