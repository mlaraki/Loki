import React, { Component } from 'react';
import '../../node_modules/bulma/css/bulma.css';

     export default class DropDown extends React.Component {
        constructor(props) {
          super(props);
          this.state = {addClass: false}
        }
        toggle() {
          this.setState({addClass: !this.state.addClass});
        }
        render() {
          let boxClass = ["dropdown"];
          if(this.state.addClass) {
            boxClass.push('is-active');
          }
        
  
  
      return (
        <div className={boxClass.join(' ')} onClick={this.toggle.bind(this)}>
        <div className="dropdown-trigger">
          <button className="button" aria-haspopup="true" aria-controls="dropdown-menu2">
            <span>Content</span>
            <span class="icon is-small">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div class="dropdown-menu" id="dropdown-menu2" role="menu">
          <div class="dropdown-content">
            <div class="dropdown-item">
              <p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>
            </div>
            
          </div>
        </div>
      </div>
      );
    }
  }