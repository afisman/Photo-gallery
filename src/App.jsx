import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css'
import ImageDetails from './components/ImageDetails/ImageDetails'
import FavoritesListPage from './pages/FavoritesListPage/FavoritesListPage';
import ImageListPage from './pages/ImageListPage/ImageListPage';
import Layout from './pages/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { getFavoriteImages } from './features/favorites/favoritesSlice';

function App() {

  const dispatch = useDispatch();
  const favorites = useSelector(getFavoriteImages);
  const [favoritesList, setFavoritesList] = useState(favorites)

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout favoritesList={favoritesList} setFavoritesList={setFavoritesList} />}>
          <Route index element={<ImageListPage favoritesList={favoritesList} setFavoritesList={setFavoritesList} />} />
          <Route path='favorites' element={<FavoritesListPage favoritesList={favoritesList} setFavoritesList={setFavoritesList} />} />
        </Route>
        <Route path='/favorites/:id' element={<ImageDetails />} />
      </Routes>
    </>
  )
}

export default App


