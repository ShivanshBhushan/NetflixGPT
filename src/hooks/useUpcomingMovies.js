import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { options } from '../utils/constants'
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () =>{
    const dispatch = useDispatch();

    const getUpcomingMovies = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming', options);
    const moviesData = await data.json();
    dispatch(addUpcomingMovies(moviesData.results));
    } 

    useEffect(()=>{
        getUpcomingMovies()
    },[]);

}

export default useUpcomingMovies;