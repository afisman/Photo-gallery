import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css'
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer/Footer';
import ImageDetails from './components/ImageDetails/ImageDetails'
import FavoritesList from './components/FavoritesList/FavoritesList';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/favorites' element={<FavoritesList />} />
        <Route path='/favorites/:id' element={<ImageDetails />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App


