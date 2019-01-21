import React, { Component } from 'react';
import logo from '../img/logo-full.svg';
import Navbar from '../Components/Navbar'
import '../../node_modules/bulma/css/bulma.css'
import DropDown from "../Components/dropdown"
import {Helmet} from "react-helmet";
var Latex = require('react-latex');



export default class Home extends Component { 
  state = { 
  }
  
  render () {                                   
      return (


      	
      <div className="App">
      

    <head>
        <link href="//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.3/katex.min.css" rel="stylesheet"/>
		{/* <link rel="stylesheet" type="text/css" href="../semantic/dist/semantic.min.css"/>
<script
  src="https://code.jquery.com/jquery-3.1.1.min.js"
  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
  crossOrigin="anonymous"></script>
<script src="../semantic/dist/semantic.min.js"></script> */}
    </head>

  		<Navbar/>

        <header className="App-header">

     
          		<img src={logo} className="App-logo" alt="logo" style={{marginTop:'50px'}} />
          		<p>
          		  Tired of the Hull ? You are in the right place
          		</p>  
          		           
        
<br/>
<br/>
         	<div className='columns'>
         		
         		<div className="column is-one-third">
         			<div className= "box" id="home-button" style={{boxShadow:"0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1)" ,borderRadius:'30px'}}>
         				<h1 style={{fontSize:"20px"}}>Binomial Tree</h1>
{/* 						 
						 <Latex>{"$Call = So * N(d1) - K e^{-rt} * N(d2)$"}</Latex>
						 <Latex>{"$Put = K e^{-rt} * N(-d2) - So * N(-d1)$"}</Latex>
						 <Latex>{"$d1 = \\frac{\\ln(So / K) + (r- \\sigma^2 /2) *T}{\\sigma\\sqrt {}T}$"}</Latex>
						 <Latex>{"$d2 = d1 - \\sigma\\sqrt{}T $"}</Latex> */}
         			</div>
         		</div>

         		<div className="column is-one-third">
         			<div className= "box" id="home-button" style={{boxShadow:"0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1)" ,borderRadius:'30px'}}>
         				<h1 style={{fontSize:"20px"}}>Black-Scholes Model</h1>
         			
					
						 {/* <Latex>{"$Call= So * N(d1) - K e^{-rt} * N(d2)$"}</Latex>
						 <Latex>{"$Put= K e^{-rt} * N(-d2) - So * N(-d1)$"}</Latex>
						 <Latex>{"$d1= \\frac{\\ln(So / K) + (r- \\sigma^2 /2) *T}{\\sigma\\sqrt {}T}$"}</Latex>
						 <Latex>{"$d2= d1 - \\sigma\\sqrt{}T $"}</Latex> */}
						 
         			</div>
         		</div>

         		<div className="column is-one-third">
         			<div className= "box" id="home-button" style={{boxShadow:"0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1)" ,borderRadius:'30px'}}>
         				<h1 style={{fontSize:"20px"}}>Arbitrage</h1>
         			</div>
         		</div>

         	</div>
        </header>

      </div>
      )
   }
}