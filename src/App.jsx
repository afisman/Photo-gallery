import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import ImageDetails from './pages/ImageDetails/ImageDetails'
import FavoritesListPage from './pages/FavoritesListPage/FavoritesListPage';
import ImageListPage from './pages/ImageListPage/ImageListPage';
import Layout from './pages/Layout';
import './App.css'
import 'react-toastify/dist/ReactToastify.css';

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
      <ToastContainer />
    </>
  )
}

export default App


