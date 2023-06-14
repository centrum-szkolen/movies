import React from 'react';
import styles from './HomePage.module.css'
import { useFetch } from '../../hooks/useFetch';

const HomePage = () => {
  
  const playingMovies = useFetch("movie/now_playing");
  const popularMovies = useFetch("movie/popular");

  console.log(playingMovies.data);
  console.log(popularMovies.data);
 
  return (
    <div>
        
        <h1>{playingMovies.loading ? "Wczytywanie..." : "Filmy"}</h1>
    </div>
  )
}

export default HomePage

