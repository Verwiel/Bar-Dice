import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Aces from './Pages/Aces/Index'
import BarDice from './Pages/BarDice/Index'
import ShipCaptainCrew from './Pages/ShipCaptainCrew/Index'
import ThreeMan from './Pages/ThreeMan/Index'
import ThreesLow from './Pages/ThreesLow/Index'

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
