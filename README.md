React Router + Server Side Rendering + Code Splitting
=====================================================

What I wanted to achieve here is:
**Have a webapp that has SEO indexing and has a very short loading time on mobile devices on 3G connections**

The goal of this example is to provide a boilerplate ready for
production, simultaneously taking advantage of React Router, 
Server Side Rendering and Code Splitting to achieve our objective.

This was achieved by combining server side rendering with code splitting.
The solution was created combining:
* https://github.com/webpack/react-webpack-server-side-example
* https://github.com/ryanflorence/example-react-router-server-rendering-lazy-routes


For the server side, only the React modules are transpilled through Babel, 
the server code is vanilla Node ES6 Javascript. This facilitates debugging
through VSCode, as you can place breakpoints directly in your server code.
The drawback is that it limits the usage of ES6 features implemented by Node.
I consider easy debugging a very important feature for software development,
and I chose this solution for this reason. You could modify webpack's server 
configuration file to transpile the whole server code if you wish.

## How it works
* For code splitting, the system uses webpack require.ensure - [see more here](https://webpack.github.io/docs/code-splitting.html)
* The code splitting is strategically placed on dynamic routes to split the code based on the current URL - [see more here](https://github.com/ReactTraining/react-router/blob/master/docs/guides/DynamicRouting.md)
* For the server side rendering work, it transpiles the RootRoute and renders the HTML on string that is sent back to the client

## Running

```
npm install
npm start
open http://localhost:5000
```

