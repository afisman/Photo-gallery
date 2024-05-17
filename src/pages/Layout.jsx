import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const Layout = ({ favoritesList, setFavoritesList }) => {
    return (
        <>
            <Navbar favoritesList={favoritesList} setFavoritesList={setFavoritesList} />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout