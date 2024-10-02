import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const nowPlayingMoviesList = useSelector((store)=>store.movies.nowPlayingMovies);
  const PopularMoviesList = useSelector((store)=>store.movies.popularMovies);
  const TopRatedMoviesList = useSelector((store)=>store.movies.topRatedMovies);
  const UpcomingMoviesList = useSelector((store)=>store.movies.upcomingMovies);

  if(PopularMoviesList===null) return;


  return (
    <div className='bg-black text-white -mt-36'>
      <MovieList title={"Now Playing"} moviesList={nowPlayingMoviesList}/>
      <MovieList title={"Popular"} moviesList={PopularMoviesList}/>
      <MovieList title={"Top Rated"} moviesList={TopRatedMoviesList}/>
      <MovieList title={"Upcoming"} moviesList={UpcomingMoviesList}/>
    </div>
  )
}

export default SecondaryContainer