import React from 'react'

const MovieCard = () => {
  return (
    <div className="movie">
        <img className="movie__poster" src="https://m.media-amazon.com/images/M/MV5BNTU1MzgyMDMtMzBlZS00YzczLThmYWEtMjU3YmFlOWEyMjE1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"/>
        <h3 className="movie__title">Harry Potter</h3>
        <h3 className="movie__year">2001</h3>
    </div>
  )
}

export default MovieCard

