import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import Header from './Header'



const Browse = () => {

  useNowPlayingMovies();

  //..................................... JSX Code below .................................

  return (
    <div>
      <Header/>

      

    </div>
  )
}

export default Browse