import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { options } from '../utils/constants'
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () =>{
    const dispatch = useDispatch();

    const getPopularMovies = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/popular', options);
    const moviesData = await data.json();
    dispatch(addPopularMovies(moviesData.results));
    } 

    useEffect(()=>{
        getPopularMovies()
    },[]);

}

export default usePopularMovies;