import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

import './Navbar.css';

import InputBase from '@mui/material/InputBase';
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';
import { grey } from '@mui/material/colors';
import { useDispatch } from 'react-redux';
import { filterThunk } from '../../features/search/filterThunk';


const Navbar = () => {
    const [isFavorites, setIsFavorites] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();

    const handleClick = () => {
        isFavorites ? setIsFavorites(false) : setIsFavorites(true);
    }

    const handleSubmit = () => {
        console.log(searchTerm)
        dispatch(filterThunk(searchTerm));
    }

    return (

        <header className='navBar'>
            <div>
                <img src="/PA.png" className='logo-img' />
            </div>
            <div>
                <form className='searchBar' onSubmit={handleSubmit}>
                    <IconButton type="submit" aria-label="search">
                        <SearchIcon className='searchBar__icon' />
                    </IconButton>
                    <input type="text"
                        className='searchBar__input'
                        placeholder='Search images ...'
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value)
                        }}
                    />

                </form>
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