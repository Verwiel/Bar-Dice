import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Dice from './Components/Die'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello</h1>
        </header>
        <main>
          <nav>
            <Router>
              <Switch>
                <Route exact path="/" component=""/>
                <Route path ="/BarDice" component=""/>
              </Switch>
            </Router>
          </nav>
          <Dice />
          <Dice />
        </main>
      </div>
    );
  }
}

export default App;
