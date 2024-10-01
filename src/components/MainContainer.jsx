import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {

    const movies = useSelector((store)=>store?.movies?.nowPlayingMovies);

    
    if(!movies) return;

    const mainMovie = movies[0];

    const {original_title, overview, id} = mainMovie;

  return (
    <div className='overflow-hidden'>
        <VideoTitle title={original_title} desc={overview}/>
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer