import React from 'react';

const PokemonList = ({pokemon, pokemonSelect}) => {
  return(
    <ul>
      {
        pokemon.map( item => {
          return (
            <li data-url={item.url} onClick={pokemonSelect}>
              {item.name}
            </li>
          )
        })
      }
    </ul>
  )
}

export default PokemonList;
