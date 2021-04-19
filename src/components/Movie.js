import React from "react";

const Movie = ({name, url}) => {
    return (
        <>
        <div id="list-movies">
        <ul>
            <li> <a href= {url}>{name}</a></li>
        </ul>
        </div>
        
        </>
       
        
    )
}

export default Movie;