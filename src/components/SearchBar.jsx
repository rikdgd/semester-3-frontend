import React from 'react';
import '../style/SearchBar.css'

function SearchBar() {
    return(
        <form className='col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3'>
            <input className='form-control form-control-dark' type='search' placeholder='search...' id="searchBar"></input>
        </form>
    );
}

export default SearchBar;