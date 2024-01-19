import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css'
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';
import Footer from './components/Footer/Footer';
import ImageDetails from './components/ImageDetails/ImageDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/favorites' element={<FavoritesPage />} />
        <Route path='/favorites/:id' element={<ImageDetails />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App


