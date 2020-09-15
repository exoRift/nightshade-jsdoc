import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Navbar from './util/Navbar.jsx'

import routes from './util/routes.js'
import data from './util/docdata.json'

import {
  process
} from './util/utils.jsx'

const processed = process(data)

export default function Routes () {
  return (
    <Router>
      <Navbar data={processed}/>

      <div id='app'>
        {routes
          .concat(processed.navs)
          .map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.Component}
              render={route.render}
            />
          ))}
      </div>
    </Router>
  )
}
