import App from '../components/App'
import Index from '../components/Index'

export default {
  path: '/',
  component: App,
  childRoutes: [
    require('./LazyLoadRoute').default
  ],
  indexRoute: {
    component: Index
  }
}

