import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchError, fetchSearchItems, fetchStatus } from '../../features/search/searchSlice';
import { getFavoriteImages } from '../../features/favorites/favoritesSlice';
import { filterThunk } from '../../features/search/filterThunk';
import './ImageList.css'
import { FavoriteBorderOutlined, FavoriteOutlined, Download } from '@mui/icons-material';



const ImageList = () => {
    const dispatch = useDispatch();
    const favorites = useSelector(getFavoriteImages);
    const data = useSelector(fetchSearchItems);
    const error = useSelector(fetchError);
    const status = useSelector(fetchStatus);
    const [isLoading, setIsLoading] = useState(true);
    const [images, setImages] = useState([]);

    const isFavorite = (image, favorites) => {

        return favorites.includes((favorite) => favorite.id === image.id)
    }


    useEffect(() => {
        if (status == 'idle') {
            dispatch(filterThunk(''));
        } else if (status === 'fulfilled') {
            const imagesToUpdate = data.slice(0, 20).map((img) => (
                {
                    id: img.id,
                    url: img.urls.full,
                    description: img.description,
                    width: img.width,
                    height: img.height,
                    likes: img.likes,
                    favorite: isFavorite(img, favorites)
                }
            ));
            console.log(imagesToUpdate)
            setImages(imagesToUpdate);
            setIsLoading(false);

        } else if (status === 'rejected') {

        }
    }, [dispatch, status])
    return (
        <div className='imgList'>
            {
                isLoading ? (
                    <p>Loading images ...</p>
                ) :
                    images.map((image) => (
                        <div key={image.id} className='imgList__card'>
                            <img src={image.url} alt={image.description} className='imgList__card__img' />
                            {
                                image.favorite === true ?
                                    <FavoriteOutlined className='imglist__card__icon__heart' />
                                    :
                                    <FavoriteBorderOutlined className='imgList__card__icon__heart' />
                            }
                            <Download className='imgList__card__icon__download' />
                        </div>
                    ))
            }
        </div >
    )
}

export default ImageList