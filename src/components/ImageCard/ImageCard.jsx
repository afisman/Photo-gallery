import React from 'react';
import { FavoriteBorderOutlined, Favorite, Download } from '@mui/icons-material';

import './ImageCard.css'


const ImageCard = ({ image, handleFavorite, isFavorite }) => {
    return (
        <div className='imgList__card' >
            <img src={image.url} alt={image.description} className='imgList__card__img' />
            {/* {
                isFavorite(image) ? */}
            <Favorite className='imgList__card__icon__heart' onClick={() => { handleFavorite(image) }} />
            {/* :
                    <FavoriteBorderOutlined className='imgList__card__icon__heart' onClick={() => { handleFavorite(image) }} />
            } */}
            <Download className='imgList__card__icon__download' />
        </div>)
}

export default ImageCard