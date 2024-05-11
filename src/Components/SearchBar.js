import React from "react";
import { useState } from "react";
import { searchPokemon } from "./api";

const Searchbar = () => {
    const [search, setSearch] = useState("temp");
    const [pokemon, setPokemon] = useState();

    const onChangeHandler = (e) => {
        setSearch(e.target.value);
     }

    const onclickHandler = () => {
        searchPokemonHandler(search)
    }
    
    const searchPokemonHandler = async (pokemon) => {
        const result =  await searchPokemon(pokemon);
        setPokemon(result);
      }

        
         
        


    return (   
        <div className = "searchbar-container">
            <div className = "searchbar">
            <input type="text" placeholder="Search Pokemon" onChange={onChangeHandler}/>
            </div>
            <div className="btn"><button onClick={onclickHandler}>search</button> </div>
            {
                pokemon ? (
                    <div>
                        <h1 className="pkmName">{pokemon.name}</h1>
                        <img src={pokemon.sprites.front_default} alt="pokemon"/>
                    </div>
                ) : null
            }
        </div>
        
    )

}

export default Searchbar;
