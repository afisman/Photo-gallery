import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchError, fetchSearchItems, fetchStatus } from '../../features/search/searchSlice';
import { getFavoriteImages, addFavorite, removeFavorite } from '../../features/favorites/favoritesSlice';
import { filterThunk } from '../../features/search/filterThunk';
import { FavoriteBorderOutlined, FavoriteOutlined, Download } from '@mui/icons-material';
import './FavoritesList.css'

const FavoritesList = () => {
    const dispatch = useDispatch();
    const favorites = useSelector(getFavoriteImages);
    const data = useSelector(fetchSearchItems);
    const error = useSelector(fetchError);
    const status = useSelector(fetchStatus);
    const [isLoading, setIsLoading] = useState(true);
    const [images, setImages] = useState([]);

    console.log('En favoritos')
    return (
        <div className='favorites'>Favoriteslist</div>
    )
}

export default FavoritesList