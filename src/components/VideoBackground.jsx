import { useSelector } from 'react-redux';
import useGetMovieTrailer from '../hooks/useGetMovieTrailer'

const VideoBackground = ({movieId}) => {

  useGetMovieTrailer(movieId);

  const trailerData = useSelector((store)=>store.movies.movieTrailer);


  //..............................JSX BEGINS..................................................

  return (
    <div> 
        <iframe width="560" height="315" src={"https://www.youtube.com/embed/"+trailerData?.key+"?si=L2c4lLvE_jgGr65u&amp;controls=0&amp;start=3"}
        title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
        </iframe>
    </div>
  )
}

export default VideoBackground