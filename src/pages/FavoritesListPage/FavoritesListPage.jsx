import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addFavorite, removeFavorite } from '../../features/favorites/favoritesSlice';
import { Favorite, Download } from '@mui/icons-material';

import './FavoritesListPage.css'
import { isFavorite } from '../../utils/favorites';


const FavoritesListPage = ({ favoritesList }) => {

    const [sortedFavorites, setSortedFavorites] = useState(favoritesList);


    const handleFavorite = (image) => {
        isFavorite(image, favoritesList) ? dispatch(removeFavorite(image.id)) : dispatch(addFavorite(image));
    }

    const handleSort = (e) => {
        if (e.target.value !== '') {
            const sortedArray = [...favoritesList].sort((a, b) => a[e.target.value] < b[e.target.value] ? 1 : -1);
            setSortedFavorites(sortedArray);
        }
    }

    useEffect(() => {
        setSortedFavorites(favoritesList)
    }, [favoritesList])

    return (
        <div className="favContainer">
            <select name="" id="favSort" onChange={handleSort} className='favFilters'>
                <option value="">Filter</option>
                <option value="width">Width</option>
                <option value="height">Height</option>
                <option value="likes">Likes</option>
                <option value="dateAdded">Date added</option>

            </select>
            <div className='favList'>
                {
                    sortedFavorites.map((favorite) => (
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

export default FavoritesListPage