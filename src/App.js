import './App.css';
import Navbar from './Components/Navbar';
import Searchbar from './Components/SearchBar';
import "./fonts/Sigokae Demo.otf";
import "./fonts/Wasabi Regular.ttf";
import "./fonts/Aokahori.ttf";
import React, {useEffect, useState} from 'react';
import {getPokemons, getPokemonData, searchPokemon} from './Components/api';
import Pokedex from './Components/Pokedex';


function App() {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  const itensPerPage = 21;

  const fetchpokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(itensPerPage, itensPerPage * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      })
      const result = await Promise.all(promises);
      setPokemons(result);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itensPerPage));
    } catch (error) {
      console.log("error: ", error);
    }
  }

  
  useEffect(() => {
  console.log("Loaded")
  fetchpokemons();
  },[page])

  const onSearchHandler = async (pokemon) => {
  if(!pokemon) {
    return fetchpokemons();
  }
  setLoading(true);
  setNotFound(false);
  const result = await searchPokemon(pokemon);
  if(!result) {
    setNotFound(true);
    setLoading(false);
  } else{
    setPokemons([result]);
    setTotalPages(1);
    setLoading(false);
    setPage(0);
  }

}
  
  
  return (
    <div>
      <Navbar />
      <Searchbar onSearchHandler ={onSearchHandler}/>
      <Pokedex  pokemons={pokemons} loading={loading} page={page} setPage={setPage} totalPages={totalPages}/>

    </div>

  );
}

export default App;
