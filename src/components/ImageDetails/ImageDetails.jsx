import React, { useEffect, useState } from 'react';
import { Delete, Edit, Download, KeyboardReturn, Save } from '@mui/icons-material';
import { useNavigate, useParams } from 'react-router-dom';
import { getFavoriteImages, addFavorite, removeFavorite, updateFavorite } from '../../features/favorites/favoritesSlice';
import './ImageDetails.css';


import { useDispatch, useSelector } from 'react-redux';
import { Box, Modal } from '@mui/material';


const ImageDetails = () => {
    const { id } = useParams();
    const favoriteImages = useSelector(getFavoriteImages)
    const [modalOpen, setModalOpen] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const image = favoriteImages?.find((img) => img.id === id) || null;
    const [editData, setEditData] = useState(image.description)
    const handleModalOpen = () => setModalOpen(true)
    const handleModalClose = () => setModalOpen(false)

    const handleDelete = () => {
        dispatch(removeFavorite(image.id));
        navigate('/favorites');
    }

    const handleUpdate = () => {
        const updateData = {
            ...image,
            description: editData,
        }

        dispatch(updateFavorite(updateData))
        handleModalClose()
    }




    return (
        <div className='details__container'>
            <Modal open={modalOpen} onClose={handleModalClose}>
                <Box className='modalBox'>
                    <form className='editForm'>
                        <label>
                            Description
                        </label>
                        <textarea
                            value={editData || ''}
                            onChange={(e) => setEditData(e.target.value)}
                            cols="30"
                            rows="20"
                        />
                        <div className='modal__icons'>
                            <Save
                                onClick={handleUpdate}
                                style={{ fontSize: '50px', color: 'white', cursor: 'pointer' }}
                                className='modal__icons__icon' />
                            <KeyboardReturn
                                onClick={handleModalClose}
                                style={{ fontSize: '50px', color: 'white', cursor: 'pointer' }}
                                className='modal__icons__icon' />
                        </div>
                    </form>
                </Box>
            </Modal>

            <div className='details'>
                <div className='details__img'>
                    <img src={image.url} alt={image.description} className='details__img__img' />
                </div>

                <div className='details__description'>
                    <div>
                        <div>
                            <h3>Description</h3>
                            <p>{image.description || 'No description available'}</p>
                        </div>
                        <div>
                            <h4>Likes</h4>
                            <p>{image.likes}</p>
                        </div>
                    </div>

                    <div className='details__description__icons'>
                        <Download style={{ fontSize: '50px', cursor: 'pointer' }} />
                        <Delete style={{ fontSize: '50px', cursor: 'pointer' }} onClick={handleDelete} />
                        <Edit style={{ fontSize: '50px', cursor: 'pointer' }} onClick={handleModalOpen} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageDetails