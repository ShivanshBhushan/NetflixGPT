import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, moviesList}) => {
    
    console.log(title);
    console.log(moviesList);

    if(moviesList===null) {
      return;
    }
  return (
    <div className='px-2'>
        <h3 className='text-3xl font-bold py-4 mb-2 px-1'>{title}</h3>
        <div className='flex overflow-x-scroll'>
            <div className='flex '>
                {moviesList.map((movie) => (<MovieCard key={movie.id} poster={movie.poster_path}/>))}
            </div>
        </div>
    </div>
    

  )
}

export default MovieList