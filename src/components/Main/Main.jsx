import React, { useEffect, useState } from 'react'
import './Main.css'
import MovieCard from '../MovieCard/MovieCard'
import popcorn_banner from '../../assets/popcorn_banner.jpg'
import search__btn from '../../assets/search__btn.png'
import axios from 'axios'

const Main = () => {

  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");


  let currentMovies = []

  async function getMovies(searchTerm) {
    const { data } = await axios.get(`https://www.omdbapi.com/?apikey=a5e7ab33&s=${searchTerm}`)
    const movieData = data.Search
    setMovies(movieData);
    movieData(currentMovies);
    setSearchValue(searchTerm);
    console.log(currentMovies)
  }

  function sortBy(filter) {
    console.log(filter);

  let sortedMovies = [...currentMovies]

  if (filter === "newest") {
    sortedMovies(movieData.slice().sort((a, b) => b.Year - a.Year)
  // } else if (filter === "oldest") {
  //   sortedMovies.sort((a, b) => a.Year - b.Year)
  // } else if (filter === "name") {
  //   sortedMovies.sort((a, b) => a.Title.toLowerCase().localeCompare(b.Title.toLowerCase()))
  // }

  setMovies(sortedMovies)}
  

  return (
  <section id="main__body">
      <div className="main">
        <div className="main__container">
            <img className="banner--img" src={popcorn_banner} alt="Banner"/>
            <div className="main__row">
                <h1 className="main__title">Start your movie night here...</h1>
                <div className="main__search">
                    <div className="search__bar">
                      <input
                        type="text"
                        className="main__search--input"
                        value={searchValue}
                        onChange={(event) => setSearchValue(event.target.value)}
                        placeholder="Find your flick"/>
                        <img className="search__img" src={search__btn} onClick={() => getMovies(searchValue)} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="options__container">
        <div className="options__row">
          <div id="info" className="options__header hidden">
            <h2 className="options__title options__header--title">
              The "reel" results...
              <span className="searchName">{searchValue}</span>
            </h2>
            <select id="movieSort" onChange={(event) => sortBy(event.target.value)}>
              <option value="" defaultValue="Sort By">Sort By</option>
              <option value="name">Name, A to Z</option>
              <option value="newest">Release Date, Newest</option>
              <option value="oldest">Release Date, Oldest</option>
            </select>
          </div>
        </div>
      </div>
      <div className="all__movies">
        <div className="movies">
            {movies.length > 0 && (
              movies.slice(0, 9).map(movie => (
            <MovieCard movie={movie} key={movie.imdbID}
            />))
            )}
        </div>
      </div>
  </section>
  )
}


export default Main;
