import React, { Component } from 'react';
import axios from 'axios';
import './App.scss';

export default class Pokedex extends Component {
  state = {
    pokemon: [],
    selected: null,
  }

  render() {
    const { selected } = this.state;
    return (
      <div className="pokedex">
        <div className="frame">
          <div className="screen">           
          </div>
          <div className="screen pokemon">
            <ul>                                
            </ul>
          </div>            
        </div>
        <div className="controls">
          <div className="btn back" onClick={this.handleBack}>
            BACK
          </div>
          <div className="btn next">
            NEXT
          </div>
        </div>
      </div>
    )
  }
};