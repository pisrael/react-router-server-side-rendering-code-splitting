import App from './components/App'
import Index from './components/Index'

export default {
  path: '/',
  component: App,
  childRoutes: [
        {
            path: 'lazyload',
            getComponent(nextState, cb) {
                System.import('./components/LazyLoad').then(module => cb(null, module.default))
            }
        }
  ],
  indexRoute: {
    component: Index
  }
}

