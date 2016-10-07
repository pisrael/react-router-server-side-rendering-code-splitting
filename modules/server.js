const http = require('http')
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const ReactRouter = require('react-router')
const fs = require('fs')
const Utils = require('./utils/server-utils')
const routes = require('./serverside.bundle.js');

const PORT = process.env.PORT || 5000

function renderApp(props, res) {
  const markup = ReactDOMServer.renderToString(React.createFactory(ReactRouter.RoutingContext)( Object.assign({},props) ))
  const html = Utils.createPage(markup)
  Utils.write(html, 'text/html', res)
}

http.createServer((req, res) => {

  if (req.url === '/favicon.ico') {
    Utils.write('haha', 'text/plain', res)
  }

  // serve JavaScript assets
  else if (/__build__/.test(req.url)) {
    fs.readFile(`.${req.url}`, (err, data) => {
      Utils.write(data, 'text/javascript', res)
    })
  }

  // handle all other urls with React Router
  else {
    ReactRouter.match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
      if (error)
        Utils.writeError('ERROR!', res)
      else if (redirectLocation)
        Utils.redirect(redirectLocation, res)
      else if (renderProps)
        renderApp(renderProps, res)
      else
        Utils.writeNotFound(res)
    })
  }

}).listen(PORT)
console.log(`listening on port ${PORT}`)

