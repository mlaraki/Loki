import React, { Component } from 'react';



export default class Navbar extends Component { 
  state = { 
  }
  
  render () {                                   
      return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href='/'>
      <img src={require('../img/logo-text.png')} width="112" height="28" alt=""/>
    </a>

    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item" href='/'>
        Home
      </a>
    
      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">
          Courses
        </a>

        <div className="navbar-dropdown">
          <a className="navbar-item" href="/Binomial">
            Binomial Model
          </a>
          <a className="navbar-item" href='/bsm'>
            Black-Scholes-Merton Model
          </a>
          <a className="navbar-item">
            Arbitrage
          </a>
          
        </div>
      </div>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a className="button " style={{backgroundColor:"#4c96d7" , color:"white"}}>
            <strong>Sign up</strong>
          </a>
          <a className="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>

      )
   }
}