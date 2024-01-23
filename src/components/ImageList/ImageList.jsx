import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchError, fetchSearchItems, fetchStatus } from '../../features/search/searchSlice';
import { getFavoriteImages, addFavorite, removeFavorite } from '../../features/favorites/favoritesSlice';
import { filterThunk } from '../../features/search/filterThunk';
import './ImageList.css'
import { FavoriteBorderOutlined, FavoriteOutlined, Download } from '@mui/icons-material';
import { handleDownload } from '../../utils/download';
import { isFavorite } from '../../utils/favorites';



const ImageList = () => {
    const dispatch = useDispatch();
    const favorites = useSelector(getFavoriteImages);
    const data = useSelector(fetchSearchItems);
    const error = useSelector(fetchError);
    const status = useSelector(fetchStatus);
    const [isLoading, setIsLoading] = useState(true);
    const [images, setImages] = useState([]);


    const handleFavorite = (image) => {
        isFavorite(image, favorites) ? dispatch(removeFavorite(image.id)) : dispatch(addFavorite(image));
    }

    const handleFilter = (e) => {
        dispatch(filterThunk(e.target.value))
    }

    useEffect(() => {
        if (status == 'idle') {
            dispatch(filterThunk(''));
        } else if (status === 'fulfilled') {
            console.log(data[0].created_at)

            const imagesToUpdate = data.map((img) => (
                {
                    id: img.id,
                    url: img.urls.full,
                    description: img.description,
                    width: img.width,
                    height: img.height,
                    likes: img.likes,
                    dateAdded: img.created_at,

                }
            ));
            setImages(imagesToUpdate);
            setIsLoading(false);

        } else if (status === 'rejected') {
            alert(error);
            setIsLoading(false);
        }
    }, [dispatch, status])
    return (
        <div className="container__list">
            <select
                name="listFilters"
                id="listFilters"
                onChange={handleFilter}
                className='img__filters'
            >
                <option value=""></option>
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
                        images.map((image) => (
                            <div key={image.id} className='imgList__card' >
                                <img src={image.url} alt={image.description} className='imgList__card__img' />
                                {
                                    isFavorite(image) ?
                                        <FavoriteOutlined className='imglist__card__icon__heart' onClick={() => { handleFavorite(image) }} />
                                        :
                                        <FavoriteBorderOutlined className='imgList__card__icon__heart' onClick={() => { handleFavorite(image) }} />
                                }
                                <Download className='imgList__card__icon__download' onClick={() => handleDownload(image)} />
                            </div>
                        ))
                }
            </div >
        </div>
    )
}

export default ImageList