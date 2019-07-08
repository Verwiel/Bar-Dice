import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Aces from './Games/Aces/Game'
import BarDice from './Games/BarDice/Game'
import ShipCaptainCrew from './Games/ShipCaptainCrew/Game'
import ThreeMan from './Games/ThreeMan/Game'
import ThreesLow from './Games/ThreesLow/Game'

class App extends Component {
  render() {
    return (
      <>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Aces" component={Aces} />
          <Route exact path="/BarDice" component={BarDice} />
          <Route exact path="/ShipCaptainCrew" component={ShipCaptainCrew} />
          <Route exact path="/ThreeMan" component={ThreeMan} />
          <Route exact path="/ThreesLow" component={ThreesLow} />
        </Switch>

        <footer class='container-fluid'>
          <p>&copy; Drew Verwiel</p>
          <p>GitHub Link</p>
        </footer>
      </>
    )
  }
}

export default App
