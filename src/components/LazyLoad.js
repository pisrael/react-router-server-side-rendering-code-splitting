import React from 'react'

export default class LazyLoad extends React.Component {
  render() {
    return (
      <div>
        <h2>LazyLoad</h2>
        <p>
          This content is lazy loaded.Check your inspector to see chanks of js being loaded while you navigate from HOME to here.
        </p>
        <p>
          This solution allows your app to grow indefinately, without affecting user experince while she waits the app to load for the first time.
        </p>
      </div>
    )
  }
}


