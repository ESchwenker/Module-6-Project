import React from 'react'

const MovieCard = (movie) => {
  return (
    <div className="movie">
        <img className="movie__poster" src={movie.Poster}/>
        <h3 className="movie__title">{movie.Title}</h3>
        <h3 className="movie__year">{movie.Year}</h3>
    </div>
  )
}

export default MovieCard

