import React, { useEffect, useState } from 'react';
import { Delete, Edit, Download, KeyboardReturn, Save } from '@mui/icons-material';
import { useNavigate, useParams } from 'react-router-dom';
import { getFavoriteImages, removeFavorite, updateFavorite } from '../../features/favorites/favoritesSlice';
import './ImageDetails.css';



import { useDispatch, useSelector } from 'react-redux';
import { Box, Modal } from '@mui/material';
import { handleDownload } from '../../utils/download';
import swal from 'sweetalert';
import { toast } from 'react-toastify';


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
        swal({
            title: "Are you sure you want to remove this image from your favorites?",
            icon: "warning",
            buttons: {
                cancel: true,
                confirm: true
            },
            dangerMode: true
        })
            .then((willDelete) => {
                if (willDelete) {
                    dispatch(removeFavorite(image.id));
                    navigate('/favorites');
                    toast('Image deleted successfully!!', {
                        autoClose: 2000,
                    });
                } else {
                    toast('Your image is safe!', {
                        autoClose: 2000,
                    });
                }
            })
    }

    const handleUpdate = () => {
        const updateData = {
            ...image,
            description: editData,
        }

        dispatch(updateFavorite(updateData));
        handleModalClose();
        toast('Image description changed successfully!!', {
            autoClose: 2000,
        });
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
                            rows="10"
                            placeholder='Edit your description here'
                        />
                        <div className='modal__icons'>
                            <Save
                                onKe
                                onClick={handleUpdate}
                                style={{ fontSize: '2rem', color: 'white', cursor: 'pointer' }}
                                className='modal__icons__icon' />
                            <KeyboardReturn
                                onClick={handleModalClose}
                                style={{ fontSize: '2rem', color: 'white', cursor: 'pointer' }}
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
                        <div>
                            <h4>Size</h4>
                            <p>{image.width} x {image.height}</p>
                        </div>
                        <div>
                            <h4>Tags</h4>
                            <p>{image.tags}</p>
                        </div>
                    </div>

                    <div className='details__description__icons'>
                        <Download style={{ fontSize: '3rem', cursor: 'pointer' }} onClick={() => handleDownload(image)} />
                        <Delete style={{ fontSize: '3rem', cursor: 'pointer' }} onClick={handleDelete} />
                        <Edit style={{ fontSize: '3rem', cursor: 'pointer' }} onClick={handleModalOpen} />
                        <KeyboardReturn
                            onClick={() => navigate('/favorites')}
                            style={{ fontSize: '3rem', cursor: 'pointer' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageDetails