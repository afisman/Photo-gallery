import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchError, fetchSearchItems, fetchStatus } from '../../features/search/searchSlice';
import { addFavorite, getFavoriteImages, removeFavorite } from '../../features/favorites/favoritesSlice';
import { filterThunk } from '../../features/search/filterThunk';
import './ImageListPage.css'
import { FavoriteBorderOutlined, FavoriteOutlined, Download } from '@mui/icons-material';
import { handleDownload } from '../../utils/download';
import { isFavorite } from '../../utils/favorites';
import SearchBar from '../../components/SearchBar/SearchBar';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';



const ImageListPage = () => {
    const dispatch = useDispatch();

    const data = useSelector(fetchSearchItems);
    const error = useSelector(fetchError);
    const status = useSelector(fetchStatus);
    const [isLoading, setIsLoading] = useState(true);
    const [images, setImages] = useState([]);
    const favorites = useSelector(getFavoriteImages);
    const [searchTerm, setSearchTerm] = useState('');


    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        dispatch(filterThunk(e.target.value));
    }

    const handleFavorite = (image) => {
        if (isFavorite(image, favorites)) {
            dispatch(removeFavorite(image.id));
        } else {
            dispatch(addFavorite(image));
        }
    }

    const handleFilter = (e) => {
        dispatch(filterThunk(e.target.value));
    }

    const handleImages = (images) => {
        setImages(images);
    }

    useEffect(() => {
        if (status == 'idle') {
            dispatch(filterThunk(''));
        } else if (status === 'fulfilled') {
            const imagesToUpdate = data.map((img) => (
                {
                    id: img.id,
                    url: img.urls.small,
                    description: img.description,
                    width: img.width,
                    height: img.height,
                    likes: img.likes,
                    dateAdded: img.created_at,
                    tags: img.alt_description
                }
            ));
            handleImages(imagesToUpdate)
            setIsLoading(false);

        } else if (status === 'rejected') {
            alert(error);
            setIsLoading(false);
        }
    }, [dispatch, status])

    return (
        <div className="container__list">
            <SearchBar handleSearch={handleSearch} searchTerm={searchTerm} />
            <select
                name="listFilters"
                id="listFilters"
                onChange={handleFilter}
                className='img__filters'
            >
                <option value="">Filter</option>
                <option value="building">Building</option>
                <option value="landscape">Landscape</option>
                <option value="animal">Animal</option>
                <option value="portrait">Portrait</option>
            </select>

            <div className='imgList'>
                {
                    isLoading ? (
                        <p>Loading images ...</p>
                    ) :
                        <>
                            <ResponsiveMasonry
                                columnsCountBreakPoints={{ 300: 1, 700: 2, 1000: 3, 1300: 4 }}
                            >
                                <Masonry gutter='10px'>
                                    {images.map((image) => (
                                        <div key={image.id} className='imgList__card' >
                                            <img src={image.url} alt={image.description} className='imgList__card__img' />
                                            {
                                                isFavorite(image, favorites) ?
                                                    <FavoriteOutlined className='imgList__card__icon__heart' onClick={() => { handleFavorite(image) }} />
                                                    :
                                                    <FavoriteBorderOutlined className='imgList__card__icon__heart' onClick={() => { handleFavorite(image) }} />
                                            }
                                            <Download className='imgList__card__icon__download' onClick={() => handleDownload(image)} />
                                        </div>
                                    ))}
                                </Masonry>
                            </ResponsiveMasonry>
                        </>
                }
            </div >
        </div>
    )
}

export default ImageListPage