import React from "react";

const pokemon = props => {
    const{pokemon} = props;
    console.log("pokemon", pokemon);
    return <div className="pokemon-card">
        <div className="pokemon-card-container">  
        <img src={pokemon.sprites.front_default} alt="pokemon-img" className="pokemon-img"/>
        </div>
        <div className="card-body">
        <div className="card-top">
        <h3 className="pokemon-name">{pokemon.name}</h3>
        <h3>#{pokemon.id}</h3>
        </div>
        <div className="card-bottom">
            {pokemon.types.map((type, index) => {
                return <div key={index} className="pokemon-type">{type.type.name}</div>
            })}
            </div>
        </div>
        
    </div>
}

export default pokemon;