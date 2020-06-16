import React from 'react';

import { Link, useRouteMatch } from 'react-router-dom'

const MovieList = props => {
  const { movies } = props
  const { url, path } = useRouteMatch()
  console.log('url from the hook', url)
  console.log('path from the hook', path)

  return (
    <div className="movie-list">
        {movies.map(movie => (
          <Link to={`/movies/${movie.id}`}>
            <MovieDetails key={movie.id} movie={movie} />
          </Link>
        ))}
      </div>
  );
}

function MovieDetails({ movie }) {
  const { title, director, metascore, stars } = movie;
  

  return (
    
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
 
  );
}

export default MovieList;
