import React from 'react';
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';

import './SearchBar.css';

const SearchBar = ({ handleSearch, searchTerm }) => {

    return (
        <>
            <form className='searchBar'>
                <IconButton type="submit" aria-label="search">
                    <SearchIcon className='searchBar__icon' />
                </IconButton>
                <input type="text"
                    className='searchBar__input'
                    placeholder='Search images'
                    value={searchTerm}
                    onChange={(e) => { handleSearch(e) }}
                />

            </form>
        </>
    )
}

export default SearchBar