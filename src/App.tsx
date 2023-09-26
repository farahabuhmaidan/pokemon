import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
    
  let [pokColor, setPokColor] = useState(null)
  let [pokLang, setPokLang] = useState(null)
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then(response => response.json())
    .then(data => {
      const speciesUrl = data.species.url;
        
      // Fetch the species data
      return fetch(speciesUrl);
    })
    .then(response => response.json())
    .then(speciesData => {
      // Find the color information from the species data
      const color = speciesData.color.name;
      
      // Set the color in the state
      setPokColor(color);
    })
   
}, []);


return (
  <div className="App">
    
        <p>Pokemon Color: {pokColor}</p>
      
  </div>
);
}


export default App;