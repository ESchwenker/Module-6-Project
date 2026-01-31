import React from 'react'
import '../../pages/Details/MovieDetails.css'
import { Link, useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

function MovieDetails() {
  const { imdbID } = useParams()
  const [movie, setMovie] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchMovie() {
      try {
        const { data } = await axios.get(
          `https://www.omdbapi.com/?apikey=a5e7ab33&i=${imdbID}&plot=full`
        )
        setMovie(data)
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchMovie()
  }, [imdbID])

  if (isLoading) return <p>Loading movie...</p>
  if (!movie) return <p>Movie not found.</p>

  return (
    <div className="details-page">
    <button className="return-btn" onClick={() => navigate(-1)}>Back to Search</button>
    <div className="movie-details">
      <img className="detail-poster" src={movie.Poster} alt={movie.Title} />

      <div className="movie-info">
        <h1 className="detail-title">{movie.Title}</h1>
        <p className="detail-description">{movie.Year} • {movie.Runtime} • {movie.Genre}</p>
        <p className="detail-plot">{movie.Plot}</p>

        <p className="detail-para"><strong>Director:</strong> {movie.Director}</p>
        <p className="detail-para"><strong>Actors:</strong> {movie.Actors}</p>
        <p className="detail-rating"><strong>IMDb Rating:</strong> {movie.imdbRating}</p>
      </div>
    </div>
    </div>
  )
}

export default MovieDetails


