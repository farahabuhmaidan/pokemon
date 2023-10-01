import React, { useEffect, useState } from 'react';
import PokemonCard from './PokemonCard';
import './PokemonStyle.css';

const PokemonCardList: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<any[]>([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=40')
      .then((response) => response.json())
      .then((data) => {
        // Log the data received from the API
        console.log(data);

        setPokemonList(data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="pokemon-card-list">
      {pokemonList.map((pokemon) => (
        <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
      ))}
    </div>
  );
};

export default PokemonCardList;
