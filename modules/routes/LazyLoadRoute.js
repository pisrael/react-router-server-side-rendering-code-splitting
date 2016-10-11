
export default {
  path: 'lazyload',
  getComponents(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, [require('../components/LazyLoad').default])
    })
  }
}

