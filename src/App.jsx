import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ImageDetails from './components/ImageDetails/ImageDetails'
import FavoritesList from './components/FavoritesList/FavoritesList';
import ImageList from './components/ImageList/ImageList';


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<ImageList />} />
        <Route path='/favorites' element={<FavoritesList />} />
        <Route path='/favorites/:id' element={<ImageDetails />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App


