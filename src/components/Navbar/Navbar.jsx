import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const page = useLocation();
    const [isFavorites, setIsFavorites] = useState(page.pathname === '/favorites');

    const handleClick = () => {
        isFavorites ? setIsFavorites(false) : setIsFavorites(true);
    }

    return (

        <header className='navBar'>
            <div>
                <Link to={'/'}>
                    <img src="/PA.png" className='logo-img' />
                </Link>
            </div>
            <div>
                <Link to={isFavorites ? '/' : '/favorites'}>
                    <button className='navBar__btn' onClick={() => handleClick()}>{isFavorites ? 'Home' : 'Favorites'}</button>
                </Link>
            </div>
        </header>

    )
}

export default Navbar