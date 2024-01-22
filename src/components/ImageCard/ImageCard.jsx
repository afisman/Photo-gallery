import React from 'react';
import { Favorite, Download } from '@mui/icons-material';

import './ImageCard.css'
import { Link } from 'react-router-dom';


const ImageCard = ({ image, handleFavorite }) => {


    return (
        <Link to={`/favorites/${image.id}`}>
            <div className='imgList__card'>
                <img src={image.url} alt={image.description} className='imgList__card__img' />

                <Favorite className='imgList__card__icon__heart' onClick={() => { handleFavorite(image) }} />

                <Download className='imgList__card__icon__download' />
            </div>
        </Link>
    )
}

export default ImageCard