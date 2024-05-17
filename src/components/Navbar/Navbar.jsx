import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './Navbar.css';
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { filterThunk } from '../../features/search/filterThunk';


const Navbar = ({ favoritesList, setFavoritesList }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [favorites, setFavorites] = useState(favoritesList)
    const dispatch = useDispatch();
    const page = useLocation();
    const [isFavorites, setIsFavorites] = useState(page.pathname === '/favorites');


    const handleClick = () => {
        isFavorites ? setIsFavorites(false) : setIsFavorites(true);
    }

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        dispatch(filterThunk(e.target.value));
    }

    const handleFavoriteSearch = (e) => {
        setSearchTerm(e.target.value)
        if (e.target.value !== '') {
            const filteredFavorites = favorites.filter(el => el.tags?.includes(e.target.value))
            setFavoritesList(filteredFavorites);
        } else {
            setFavoritesList(favorites);
        }
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
                    <form className='searchBar'>


                        <IconButton type="submit" aria-label="search">
                            <SearchIcon className='searchBar__icon' />
                        </IconButton>
                        <input type="text"
                            className='searchBar__input'
                            placeholder='Search images'
                            value={searchTerm}
                            onChange={page.pathname === '/favorites' ? (e) => { handleFavoriteSearch(e) } : (e) => { handleSearch(e) }}
                        />

                    </form>}
            </div>
            <div>
                <Link to={isFavorites ? '/' : '/favorites'}>
                    <button className='navBar__btn' onClick={() => handleClick()}>{isFavorites ? 'Favorites' : 'Home'}</button>
                </Link>
            </div>
        </header>

    )
}

export default Navbar