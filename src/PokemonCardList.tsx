import React, { useEffect, useState } from 'react';
import PokemonCard from './PokemonCard';
import './PokemonStyle.css';

const PokemonCardList: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<Array<any>>([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=40')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPokemonList(data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (<>
    {pokemonList ?
      <div className="pokemon-card-list">
        {pokemonList.map((pokemon) => (
          <PokemonCard key={pokemon?.name} name={pokemon?.name} url={pokemon?.url} />
        ))}
      </div>
      :
      <div>Loading...</div>
    }
  </>

  );
};

export default PokemonCardList;
