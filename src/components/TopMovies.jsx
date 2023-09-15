import axios from 'axios';
import './Movies.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loader from '../utilities/Loader';

const URL = 'https://api.themoviedb.org/3/movie/upcoming?';
const _API_KEY = 'd010dbd168468ef595082edeb9a7c1eb';

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  async function getMovies() {
    try {
      const res = await axios.get(`${URL}api_key=${_API_KEY}`);
      setMovies(res.data.results.slice(10));
    } catch (error) {
      console.error(error);
    }
  }
  if (!movies) {
    return <Loader />;
  }

  return (
    <div className="container">
      <div className="container_header">Top 10 Movies</div>

      <div className="card" data-testid="movies-card">
        {movies.map((movie) => (
          <div key={movie.id} className="movie">
            <Link to={`/movie/${movie.id}`} className="movie-link">
              <div className="link_btn">
                {' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.17157 5.48284C4.73367 3.96185 7.26633 3.96185 8.82842 5.48284L9.99999 6.62359L11.1716 5.48284C12.7337 3.96185 15.2663 3.96185 16.8284 5.48284C18.3905 7.00383 18.3905 9.46984 16.8284 10.9908L9.99999 17.6396L3.17157 10.9908C1.60948 9.46984 1.60948 7.00383 3.17157 5.48284Z"
                    fill="#D1D5DB"
                  />
                </svg>
              </div>
              <div className="poster" data-testid="movie-poster">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt="poster"
                />
              </div>
              <div className="detail">
                <div className="title" data-testid="movies-title">
                  {movie.title}
                </div>
                <div className="down_detail">
                  <div
                    className="release_date"
                    data-testid="movies-release-date"
                  >
                    {movie.release_date}
                  </div>
                  <div className="rating">Rating: {movie.vote_average}%</div>
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
