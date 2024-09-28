import { useDispatch} from "react-redux";
import { options } from "../utils/constants";
import { addMovieTrailer } from "../utils/moviesSlice";
import { useEffect } from "react";

const useGetMovieTrailer = (movieId) =>{

    const dispatch = useDispatch();
    const getMovieVideo = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/'+ movieId + '/videos', options);
    const json = await data.json();
    console.log(json);

    const trailerVideo = json.results.filter((video)=>video.type==='Trailer' && video.name==='Official Trailer');
    dispatch(addMovieTrailer(trailerVideo[0]));
  }

  useEffect(()=>{
    getMovieVideo();
  },[]);
}

export default useGetMovieTrailer;