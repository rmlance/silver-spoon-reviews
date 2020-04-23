import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import RestaurantsIndexComponent from './RestaurantsIndexComponent'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={RestaurantsIndexComponent}></Route>
        <Route exact path='/restaurants' component={RestaurantsIndexComponent}></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
