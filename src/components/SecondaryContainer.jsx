import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const nowPlayingMoviesList = useSelector((store)=>store.movies.nowPlayingMovies);
  const PopularMoviesList = useSelector((store)=>store.movies.popularMovies);

  if(PopularMoviesList===null) return;


  return (
    <div className='bg-black text-white -mt-36'>
      <MovieList title={"Now Playing"} moviesList={nowPlayingMoviesList}/>
      <MovieList title={"Popular"} moviesList={PopularMoviesList}/>
    </div>
  )
}

export default SecondaryContainer