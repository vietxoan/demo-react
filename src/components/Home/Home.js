import { useEffect, useState } from 'react';
import '../Home/Home.css'
import MovieCard from './MovieCard/MovieCard';
import Empty from './Empty/Empty';

// e900f0d8
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=e900f0d8';
function Home() {
    const [movies, setMovies] = useState([]);
    const [searchName, setSearchName] = useState('');
    const [isSearch, setIsSearch] = useState(false);

    const searchMovies = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
        {title === '' ? setIsSearch(false) : setIsSearch(true)}
    }
    useEffect(() => {
        searchMovies(searchName)
    }, []);

    const handleInput = (event) => setSearchName(event.target.value);

    const handleSearch = () => {searchMovies(searchName)};
  return (
    <div>
        <div className='search'>
        <input
          placeholder="Search for movies"
          value={searchName}
          onChange={handleInput}
          onKeyDown = {(e) => {
            if (e.key === "Enter") {
              handleSearch(searchName)
            }
          }}
        />
        <img
          src="https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg"
          alt="search"
          onClick={() => {handleSearch(searchName)}}
        />
        </div>
        {
            movies?.length > 0
            ?
            (
            <div className='container'>
                {movies.map((movie) =>
                <MovieCard movieCard={movie} />
                )}
            </div>
            )
            :
            (
              <Empty searchInfo={isSearch}/>
            )
        }
    </div>
  )
}

export default Home