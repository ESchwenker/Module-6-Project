import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({movie}) => {
  return (
    <Link to={`/movie/${movie.imdbID}`} className="movie-card">
        <img className="movie__poster" src={movie.Poster}/>
        <h3 className="movie__title">{movie.Title}</h3>
        <p className="movie__year">{movie.Year}</p>
    </Link>
  )
}

export default MovieCard

