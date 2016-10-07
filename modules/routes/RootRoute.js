import App from '../components/App'
import Index from '../components/Index'

export default {
  path: '/',
  component: App,
  getChildRoutes(location, cb) {
    require.ensure([], (require) => {
      cb(null, [require('./AboutRoute')])
    })
  },
  indexRoute: {
    component: Index
  }
}

