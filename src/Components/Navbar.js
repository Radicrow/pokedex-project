import React from "react"
import pokedex_img from "./pokedex_img.png"

function Header() {
    return (
      <header>
       
      </header>
    );
  }

const Navbar = () => {
   
    return(
        <div>
            <nav>
            <img src={pokedex_img} alt="pokedex-logo" className="pokedex-logo"/>
            </nav>
        </div>

    )
}

export default Navbar