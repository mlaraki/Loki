import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import logo from './img/logo.svg';
import './App.css';
import Home from './Pages/Home'
import BSM from './Pages/BSM'
import '../node_modules/bulma/css/bulma.css'
import Binomial from './Pages/Binomial';

class App extends Component {
  render() {
    return (
    
    <BrowserRouter>
        <div>
          <Route exact={true} path='/' render={() => (
            <div className="App">
              <Home />
            </div>
          )}/>
          
          <Route exact={true} path='/bsm' render={() => (
            <div className="App">
              <BSM />
            </div>
          )}/>

          <Route exact={true} path='/Binomial' render={() => (
            <div className="App">
              <Binomial />
            </div>
          )}/>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
