import React, { Component } from 'react';
import PokemonList from './PokemonList';
import axios from 'axios';
import './App.scss';

export default class Pokedex extends Component {
  state = {
    pokemon: [],
    selected: null,
  }

  componentDidMount =  async () => {
    const result = await axios.get('https://pokeapi.co/api/v2/pokemon');   
    const   pokemon = result.data.results; 
    this.setState({
      pokemon: [...this.state.pokemon, ...pokemon],
    });
  }

  handlePokemonSelect = async (event) => {
    const {url} = event.target.dataset;
    const result = await axios.get(url);
    this.setState({
      selected: result.data,
    });
  }

  render() {
    const { selected, pokemon } = this.state;
    return (
      <div className="pokedex">
        <div className="frame">
          <div className="screen">           
            <PokemonList pokemon={pokemon} pokemonSelect={this.handlePokemonSelect} />
          </div>
          {
            selected &&
            <div className="screen pokemon">
              POKEMON
            </div>
          }
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