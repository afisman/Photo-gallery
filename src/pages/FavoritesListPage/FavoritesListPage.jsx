import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addFavorite, getFavoriteImages, removeFavorite } from '../../features/favorites/favoritesSlice';
import { Favorite, Download } from '@mui/icons-material';

import './FavoritesListPage.css'
import { isFavorite } from '../../utils/favorites';
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from '../../components/SearchBar/SearchBar';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';


const FavoritesListPage = () => {

    const [sortedFavorites, setSortedFavorites] = useState([]);
    const dispatch = useDispatch();
    const favorites = useSelector(getFavoriteImages);
    const [searchTerm, setSearchTerm] = useState('');

    const handleFavorite = (image) => {
        isFavorite(image, favorites) ? dispatch(removeFavorite(image.id)) : dispatch(addFavorite(image));
    }

    const handleSort = (e) => {
        if (e.target.value !== '') {
            console.log(sortedFavorites)
            const sortedArray = [...sortedFavorites].sort((a, b) => a[e.target.value] < b[e.target.value] ? 1 : -1);
            console.log(sortedArray)
            setSortedFavorites(sortedArray);
        }
    }

    const handleFavoriteSearch = (e) => {
        setSearchTerm(e.target.value)
        if (e.target.value !== '') {
            const filteredFavorites = favorites.filter(el => el.tags?.includes(e.target.value))
            setSortedFavorites(filteredFavorites);
        } else {
            setSortedFavorites(favorites);
        }
    }

    useEffect(() => {
        setSortedFavorites(favorites)
    }, [favorites])

    return (
        <div className="favContainer">
            <SearchBar handleSearch={handleFavoriteSearch} searchTerm={searchTerm} />
            <select name="" id="favSort" onChange={handleSort} className='favFilters'>
                <option value="">Filter</option>
                <option value="width">Width</option>
                <option value="height">Height</option>
                <option value="likes">Likes</option>
                <option value="dateAdded">Date added</option>

            </select>
            <div className='favList'>

                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 300: 1, 700: 2, 1000: 3, 1300: 4 }}
                >
                    <Masonry gutter='10px'>
                        {sortedFavorites.map((favorite) => (
                            <div className='favList__card' key={favorite.id}>
                                <Link to={`/favorites/${favorite.id}`}>
                                    <img src={favorite.url} alt={favorite.description} className='favList__card__img' />
                                </Link>
                                <Favorite className='favList__card__icon__heart' onClick={() => { handleFavorite(favorite) }} />

                                <Download className='favList__card__icon__download' />
                            </div>))}
                    </Masonry>
                </ResponsiveMasonry>

            </div>
        </div>
    )
}

export default FavoritesListPage;