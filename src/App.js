import './App.css';
import Navbar from './Components/Navbar';
import Searchbar from './Components/SearchBar';
import "./fonts/Sigokae Demo.otf";
import "./fonts/Wasabi Regular.ttf";
import "./fonts/Aokahori.ttf";
import React, {useEffect, useState} from 'react';
import {getPokemons, getPokemonData} from './Components/api';
import Pokedex from './Components/Pokedex';


function App() {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  const fetchpokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons();
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      })
      const result = await Promise.all(promises);
      setPokemons(result);
      setLoading(false);
    } catch (error) {
      console.log("error: ", error);
    }
  }

  useEffect(() => {
  console.log("Loaded")
  fetchpokemons();
  },[])
  
  
  return (
    <div>
      <Navbar />
      <Searchbar/>
      <Pokedex  pokemons={pokemons} loading={loading}/>
    </div>

  );
}

export default App;
