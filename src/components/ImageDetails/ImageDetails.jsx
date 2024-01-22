import React, { useEffect, useState } from 'react';
import { Delete, Edit, Download } from '@mui/icons-material';
import { useParams } from 'react-router-dom';
import { getFavoriteImages, addFavorite, removeFavorite } from '../../features/favorites/favoritesSlice';
import './ImageDetails.css'

import { useSelector } from 'react-redux';


const ImageDetails = () => {
    const { id } = useParams();
    const favoriteImages = useSelector(getFavoriteImages)
    const [modalOpen, setModalOpen] = useState(false);



    const handleModalOpen = () => setModalOpen(true)
    const handleModalClose = () => setModalOpen(false)

    const image = favoriteImages?.find((img) => img.id === id) || null;
    return (
        <div className='details'>
            <div className='details__img'>
                <img src={image.url} alt={image.description} className='details__img__img' />
            </div>

            <div className='details__description'>
                <h3>Description</h3>

                <p>{image.description || 'No description available'}</p>

                <h4>Likes</h4>

                <p>{image.likes}</p>

                <div className='details__description__icons'>
                    <Download style={{ fontSize: '50px' }} />
                    <Delete style={{ fontSize: '50px' }} />
                    <Edit style={{ fontSize: '50px' }} />
                </div>
            </div>

        </div>
    )
}

export default ImageDetails