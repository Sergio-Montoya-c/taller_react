import React, { Component } from 'react';
import PokemonList from './PokemonList';
import axios from 'axios';
import './App.scss';

export default class Pokedex extends Component {
  state = {
    pokemon: [],
    selected: null,
    next: '',
  }

  componentDidMount =  async () => {
    const result = await axios.get('https://pokeapi.co/api/v2/pokemon');  
    const pokemon = result.data.results; 
    this.addPokemon(pokemon, result.data.next);
  }
  
  addPokemon = (pokemon, next) => {
    this.setState({
      pokemon: [...this.state.pokemon, ...pokemon],
      next,
    });    
  } 

  handleNext = async() => {
    const {next} = this.state;
    const result = await axios.get(next);  
    const pokemon = result.data.results; 
    this.addPokemon(pokemon, result.data.next);
  }

  handlePokemonSelect = async (event) => {
    const {url} = event.target.dataset;
    const result = await axios.get(url);
    this.setState({
      selected: result.data,
    });
  }

  handleBack = () => {
    this.setState({
      selected: null,
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
              <img height="50%" src={selected.sprites.front_default} />
              <ul>
                {selected.moves.map(move => {
                  return <li>{move.move.name}</li>
                })}
              </ul>
            </div>
          }
        </div>
        <div className="controls">
          <div className="btn back" onClick={this.handleBack}>
            BACK
          </div>
          <div className="btn next" onClick={this.handleNext}>
            NEXT
          </div>
        </div>
      </div>
    )
  }
};