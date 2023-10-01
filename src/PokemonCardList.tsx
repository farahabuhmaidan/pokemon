import React, { useEffect, useState } from 'react';
import PokemonCard from './PokemonCard';
import './PokemonStyle.css';
import ReactPaginate from 'react-paginate';

const PokemonCardList: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<Array<any>>([]);
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(10);
  const itemsPerPage = 20; // Number of items per page

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedPokemonList = pokemonList.slice(startIndex, endIndex);
 
  const handlePageClick = (data: any) => {
    console.log(data)
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };
  
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${count}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPokemonList(data.results);
        setCount(data?.count)
      })
      .catch((error) => {
        console.error(error);
      });
  }, [count]);

  return (
    <>
      {pokemonList ? (
        <div className="pokemon-card-list">
          {paginatedPokemonList.map((pokemon) => (
            <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url}/>
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        breakLabel={'...'}
        pageCount={Math.ceil(count / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
        pageClassName={'pagination-item'} // Add a class for each page number
      />

    </>
  );

};

export default PokemonCardList;
