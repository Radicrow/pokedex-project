import React from "react";
import { useState } from "react";

const Searchbar = (props) => {
    const [search, setSearch] = useState("temp");
    const {onSearchHandler} = props; 

    const onChangeHandler = (e) => {
        setSearch(e.target.value);
        if(e.target.value.length === 0){
            onSearchHandler(undefined);
        }
     }

    const onclickHandler = () => {
        onSearchHandler(search);
    }



    return (   
        <div className = "searchbar-container">
            <div className = "searchbar">
            <input type="text" placeholder="Search Pokemon" onChange={onChangeHandler}/>
            </div>
            <div className="btn"><button onClick={onclickHandler}>search</button> </div>
        </div>
        
    )

}

export default Searchbar;
