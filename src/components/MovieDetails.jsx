import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import Loader from '../utilities/Loader';
import './MovieDetails.css';

const URL = 'https://api.themoviedb.org/3/movie/';
const _API_KEY = 'd010dbd168468ef595082edeb9a7c1eb';

function MovieDetails() {
  const [movie, setMovie] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const response = await axios.get(
          `${URL}${id}?api_key=${_API_KEY}&language=en-US`
        );
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    }

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <Loader />;
  }

  return (
    <div className="details_container">
      <Link to={'/'}>
        <div className="logo_wrap">
          <img src="/public/tv.png" alt="" />
          <span>Back home</span>
        </div>
      </Link>
      <div className="details_content">
        <h2 className="movie_title" data-testid="movie-title">
          {movie.title}
        </h2>
        <div className="movie_poster">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
        <div className="movie_details">
          <div className="runtime_release">
            <p className="release" data-testid="movie-release-date">
              <span>Release Date:</span> {movie.release_date}
            </p>
            <p data-testid="movie-runtime">
              <span>Runtime:</span> {movie.runtime} minutes
            </p>
          </div>
          <p className="overview" data-testid="movie-overview">
            {' '}
            Overview: {movie.overview}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
