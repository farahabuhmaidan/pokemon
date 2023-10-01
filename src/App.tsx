import React from 'react';
import PokemonCardList from './PokemonCardList';
import './PokemonStyle.css';

function App() {
  return (
    <div className="App">
      <div className="header-container">
      <header className="main-header">
        <h2>Pokémon Cards</h2>
      </header>
    </div>
      <PokemonCardList />
    </div>    
  );
}

export default App;
