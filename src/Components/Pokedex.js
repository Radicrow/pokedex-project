import React from "react";
import Pokemon from "./Pokemon";
import Pages from "./Pages";

const Pokedex = (props) => {
  const {pokemons, loading, page, setPage, totalPages} = props;

  const onForwardHandler = () => {
    if(page+1!==totalPages){
      setPage(page+1);
    }
  }
  const onBackwardHandler = () => {
    if(page>0){
      setPage(page-1);
    }
  }

  console.log("pokemons", pokemons);
  return (
    <div>
      <div className="pokedex-header"> 
        <h1>Pokedex</h1>
        <Pages page ={page+1}
        totalPages={totalPages}
        onForward={onForwardHandler}
        onBackward={onBackwardHandler}
        />
      </div>
      {loading ? (<h1 className="loading">Loading...</h1> ):
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