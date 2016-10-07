import React from 'react'
import { match, Router } from 'react-router'
import { render } from 'react-dom'
import { createHistory } from 'history'
import routes from './routes/RootRoute'

const { pathname, search, hash } = window.location
const location = `${pathname}${search}${hash}`

// calling `match` is simply for side effects of
// loading route/component code for the initial location
match({ routes, location }, () => {
  render(
    <Router routes={routes} history={createHistory()} />,
    document.getElementById('app')
  )
})

