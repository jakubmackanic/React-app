import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Clock from './Components/Clock';
import Trump from './Components/Trump';
import './css/App.css';
import Nav from './Components/Nav';
import Home from './Components/Home'
class App extends Component {

  render() {
    return(
      <Router>
      <div>
      <Nav/>
      <Home/>

      <Route path="/Clock" component={Clock} />
      <Route path="/trump" component={Trump} />
      <Route path="/home" component={Home} />
      </div>

      </Router>
    );
  }
}
export default App;
