import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { mapRoutesToComponent } from '../utils'
import { routes } from '../config'
import './App.css'
import '../assets/css/material-icon.css'

const App = () => (
  <BrowserRouter>
    <Switch>{mapRoutesToComponent(routes)}</Switch>
  </BrowserRouter>
)

export default App
