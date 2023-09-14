import axios from 'axios';
import './movies.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const URL = 'https://api.themoviedb.org/3/discover/movie?';
const _API_KEY = 'd010dbd168468ef595082edeb9a7c1eb';

function Movies() {
  const [movies, setMovies] = useState([]); // Initialize movies as an empty array

  useEffect(() => {
    getMovies();
  }, []);

  async function getMovies() {
    try {
      const res = await axios.get(`${URL}api_key=${_API_KEY}`);
      setMovies(res.data.results); // Set the fetched movie data in the state
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="container">
      <div className="container_header">Movies</div>

      <div className="card" data-testid="movies-card">
        {movies.map((movie) => (
          <div key={movie.id} className="movie">
            <Link to={`/movie/${movie.id}`} className="movie-link">
              <div className="poster" data-testid="movies-card">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt="poster"
                />
              </div>
              <div className="detail">
                <div className="title" data-testid="movies-card">
                  {movie.title}
                </div>
                <div className="release_date" data-testid="movies-card">
                  {movie.release_date}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;
