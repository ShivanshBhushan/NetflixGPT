import React from 'react'
import { moviePosterCDN } from '../utils/constants'

const MovieCard = ({poster}) => {
  return (
    <div className='w-32 mx-1 mb-2'>
        <img src={moviePosterCDN+poster} alt='movie poster' 
        className='hover:scale-105'></img>
    </div>
  )
}

export default MovieCard