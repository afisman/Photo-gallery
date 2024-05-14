import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './Navbar.css';
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { filterThunk } from '../../features/search/filterThunk';


const Navbar = () => {
    const [isFavorites, setIsFavorites] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();
    const page = useLocation();


    const handleClick = () => {
        isFavorites ? setIsFavorites(false) : setIsFavorites(true);
    }

    const handleSearch = (e) => {
        setSearchTerm(e.target.value)
        dispatch(filterThunk(e.target.value));
    }


    return (

        <header className='navBar'>
            <div>
                <Link to={'/'}>
                    <img src="/PA.png" className='logo-img' />
                </Link>
            </div>
            <div>
                {(page.pathname === '/favorites' || page.pathname === '/') &&
                    <form className='searchBar' /*onSubmit={handleSubmit}*/>


                        <IconButton type="submit" aria-label="search">
                            <SearchIcon className='searchBar__icon' />
                        </IconButton>
                        <input type="text"
                            className='searchBar__input'
                            placeholder='Search images'
                            value={searchTerm}
                            onChange={(e) => { handleSearch(e) }}
                        />

                    </form>}
            </div>
            <div>
                <Link to={isFavorites ? '/' : '/favorites'}>
                    <button className='navBar__btn' onClick={handleClick}>{isFavorites ? 'Home' : 'Favorites'}</button>
                </Link>
            </div>
        </header>

    )
}

export default Navbar