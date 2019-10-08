import React from 'react'
import './css/App.css'

import Header from './components/Header'

import CharactersList from './views/CharactersList'
import Character from './views/Character'
import NotFound from './views/NotFound'

import { ReactComponent as ArrowUp } from './svg/arrow-up.svg';

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
        <div className="scroll-to-top" onClick={ () => window.scrollTo({top: 0, behavior: 'smooth'}) }>
          <ArrowUp width={20} height={20} fill="#fff" style={{display: 'block', margin: '13px auto',}} />
        </div>
      </div>
    </Router>
  )
}

export default App;
