import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ImageDetails from './components/ImageDetails/ImageDetails'
import FavoritesListPage from './pages/FavoritesListPage/FavoritesListPage';
import ImageListPage from './pages/ImageListPage/ImageListPage';


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<ImageListPage />} />
        <Route path='/favorites' element={<FavoritesListPage />} />
        <Route path='/favorites/:id' element={<ImageDetails />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App


