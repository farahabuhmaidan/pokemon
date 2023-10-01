import React, { useEffect, useState } from 'react';
import './PokemonStyle.css';
import { type } from '@testing-library/user-event/dist/type';

type PokemonCardProps = {
  name: string;
  url: string;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, url }) => {
  const [pokemonData, setPokemonData] = useState<any>(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPokemonData(data);
      })
      .catch((error) => {
        console.error('Error fetching Pokémon details:', error);
      });
  }, [url]);

  if (!pokemonData) {
    return <div>Loading...</div>;
  }

  const { sprites } = pokemonData;

  return (
    <div className="pokemon-card">
      <h2>{name}</h2>
      <img src={sprites.front_default} alt={name} />
    </div>
  );
};

export default PokemonCard;
      //<p>Types: {types.map((type: any) => type.type.name).join(', ')}</p>
