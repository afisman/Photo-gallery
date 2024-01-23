import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getFavoriteImages, addFavorite, removeFavorite, sortFavorite } from '../../features/favorites/favoritesSlice';
import { Favorite, Download } from '@mui/icons-material';

import './FavoritesList.css'
import { isFavorite } from '../../utils/favorites';

const FavoritesList = () => {
    const dispatch = useDispatch();
    const favorites = useSelector(getFavoriteImages);


    const handleFavorite = (image) => {
        isFavorite(image, favorites) ? dispatch(removeFavorite(image.id)) : dispatch(addFavorite(image));
    }

    const handleSort = (e) => {
        if (e.target.value !== '') {
            dispatch(sortFavorite(e.target.value))
        }
    }

    return (
        <div className="favContainer">
            <select name="" id="favSort" onChange={handleSort} className='favFilters'>
                <option value=""></option>
                <option value="width">Width</option>
                <option value="height">Height</option>
                <option value="likes">Likes</option>
                <option value="dateAdded">Date added</option>

            </select>
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
        </div>
    )
}

export default FavoritesList