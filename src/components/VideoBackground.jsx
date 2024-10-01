import { useSelector } from 'react-redux';
import useGetMovieTrailer from '../hooks/useGetMovieTrailer'

const VideoBackground = ({movieId}) => {

  useGetMovieTrailer(movieId);

  const trailerData = useSelector((store)=>store.movies.movieTrailer);


  //..............................JSX BEGINS..................................................

  return (
    <div className='w-screen aspect-video -z-10'> 
        <iframe className='w-screen aspect-video' src={"https://www.youtube.com/embed/"+trailerData?.key+"?si=L2c4lLvE_jgGr65u&amp;controls=0&amp;start=3"+"?&autoplay=1&mute=1&showinfo=0&loop=1"}
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
        </iframe>
    </div>
  )
}

export default VideoBackground