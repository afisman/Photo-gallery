import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchError, fetchSearchItems, fetchStatus } from '../../features/search/searchSlice';
import { getFavoriteImages, addFavorite, removeFavorite } from '../../features/favorites/favoritesSlice';
import './FavoritesList.css'
import ImageCard from '../ImageCard/ImageCard';

const FavoritesList = () => {
    const dispatch = useDispatch();
    const favorites = useSelector(getFavoriteImages);
    const data = useSelector(fetchSearchItems);
    const error = useSelector(fetchError);
    const status = useSelector(fetchStatus);
    const [isLoading, setIsLoading] = useState(true);
    const [images, setImages] = useState([]);

    const isFavorite = (image, favorites) => {
        return favorites?.some((favorite) => favorite.id === image.id)
    }

    const handleFavorite = (image) => {
        isFavorite(image, favorites) ? dispatch(removeFavorite(image.id)) : dispatch(addFavorite(image));
    }

    return (
        <div className='favoritesList'>
            {
                favorites.map((favorite) => (
                    <ImageCard key={favorite.id} image={favorite} handleFavorite={handleFavorite} />
                ))
            }
        </div>
    )
}

export default FavoritesList