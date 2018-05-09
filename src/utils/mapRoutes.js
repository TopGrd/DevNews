import React from 'react'
import { Route } from 'react-router-dom'

function mapRoutesToComponent(routes) {
  return routes.map((route, i) => {
    return (
      <Route
        key={`route-${i}`}
        path={route.path}
        render={props => <route.component {...props} routes={route.routes} />}
      />
    )
  })
}

export default mapRoutesToComponent
