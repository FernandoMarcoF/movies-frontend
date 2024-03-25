import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'

import { Navbar } from './components/Navbar'
import { HomePage } from './pages/HomePage'
import { CardPage } from './pages/CardPage'
import { IMovie } from './interfaces/movie.interface'

export const App = () => {
  const [movies, setMovies] = useState<IMovie[]>([])

  const getAllMovies = async () => {
    try {
      const response = await axios.get('http://localhost:9000/api/movies/')
      setMovies(response.data)
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  }

  useEffect(() => {
    getAllMovies()
  }, [])

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage movies={movies} />} />
        <Route path="/:genre" element={<HomePage movies={movies} />} />
        <Route path="/movie/:id" element={<CardPage movies={movies} />} />
      </Routes>
    </>
  );
};
