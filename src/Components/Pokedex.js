import React from "react";
import Pokemon from "./Pokemon";

const Pokedex = (props) => {
  const {pokemons, loading} = props;
  console.log("pokemons", pokemons);
  return (
    <div>
      <div className="pokedex-header"> 
        <h1>Pokedex</h1>
        <div>Paginacao</div>
      </div>
      {loading ? (<h1>Loading...</h1> ):
      (
      <div className="pokedex-grid">
        {pokemons && pokemons.map((pokemon, index) => {
          return (<Pokemon key={index} pokemon={pokemon}/>)

        })}
        </div>)}
    </div>
  );
}

export default Pokedex;