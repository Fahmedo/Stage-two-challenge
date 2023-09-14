import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const URL = 'https://api.themoviedb.org/3/movie/';
const _API_KEY = 'd010dbd168468ef595082edeb9a7c1eb';

function MovieDetails() {
  const [movie, setMovie] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const response = await axios.get(`${URL}${id}?api_key=${_API_KEY}`);
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    }

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    // You can show a loading indicator or handle the loading state as needed
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <p>Release Date: {movie.release_date}</p>
      <p>Overview: {movie.overview}</p>
      {/* Add more movie details here */}
    </div>
  );
}

export default MovieDetails;
