import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css'
import ImageDetails from './components/ImageDetails/ImageDetails'
import FavoritesListPage from './pages/FavoritesListPage/FavoritesListPage';
import ImageListPage from './pages/ImageListPage/ImageListPage';
import Layout from './pages/Layout';


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<ImageListPage />} />
          <Route path='favorites' element={<FavoritesListPage />} />
        </Route>
        <Route path='/favorites/:id' element={<ImageDetails />} />
      </Routes>
    </>
  )
}

export default App


