import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { options } from '../utils/constants'
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRated = () =>{
    const dispatch = useDispatch();

    const getTopRated = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated', options);
    const moviesData = await data.json();
    dispatch(addTopRatedMovies(moviesData.results));
    } 

    useEffect(()=>{
        getTopRated()
    },[]);

}

export default useTopRated;