import React, {Component} from 'react'
import {render} from 'react-dom'
import MathJax from 'react-mathjax-preview'
var Latex = require('react-latex');
const katex = require('katex');

 
export default class Test extends React.Component {
  constructor() {
    super();
    this.state = {text: ''};
    this.updateText = this.updateText.bind(this);
   
  }

  updateText(event) {
    var nText = event.target.value;
    this.setState(function () {
      return {text: nText};
    });
  }

  

  render() {
    var text = this.state.text;
    return (
      <div>
        <head>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.10.0/dist/katex.css" integrity="sha384-xNwWFq3SIvM4dq/1RUyWumk8nj/0KFg4TOnNcfzUU4X2gNn3WoRML69gO7waf3xh" crossorigin="anonymous"/>
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.10.0/dist/katex.js" integrity="sha384-UP7zD+aGyuDvxWQEDSRYcvoTxJSD82C6VvuEBktJZGo25CVhDstY9sCDHvyceo9L" crossorigin="anonymous"></script></head>
        <input type="text" 
         onChange={this.updateText}/>
        
        
      </div> );
  }
}


