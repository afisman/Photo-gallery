import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getFavoriteImages, addFavorite, removeFavorite } from '../../features/favorites/favoritesSlice';
import { Favorite, Download } from '@mui/icons-material';

import './FavoritesList.css'

const FavoritesList = () => {
    const dispatch = useDispatch();
    const favorites = useSelector(getFavoriteImages);

    const isFavorite = (image, favorites) => {
        return favorites?.some((favorite) => favorite.id === image.id)
    }

    const handleFavorite = (image) => {
        isFavorite(image, favorites) ? dispatch(removeFavorite(image.id)) : dispatch(addFavorite(image));
    }

    return (
        <div className='favList'>
            {
                favorites.map((favorite) => (
                    <div className='favList__card' key={favorite.id}>
                        <Link to={`/favorites/${favorite.id}`}>
                            <img src={favorite.url} alt={favorite.description} className='favList__card__img' />
                        </Link>
                        <Favorite className='favList__card__icon__heart' onClick={() => { handleFavorite(favorite) }} />

                        <Download className='favList__card__icon__download' />
                    </div>))
            }
        </div>
    )
}

export default FavoritesList