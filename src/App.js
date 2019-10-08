import React from 'react'
import './css/App.css'

import Header from './components/Header'

import CharactersList from './views/CharactersList'
import Character from './views/Character'
import NotFound from './views/NotFound'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="wrapper">
          <Switch>
            <Route exact path="/" component={() => <CharactersList />} />
            <Route exact path="/character/:id" component={() => <Character />} />
            <Route component={() => <NotFound />} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App;
