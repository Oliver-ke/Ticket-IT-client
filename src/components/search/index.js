import React from 'react';

const Search = ({match}) =>{
    console.log(match.params)
    return(
        <div>Hello from search component </div>
    )
}


export default Search;