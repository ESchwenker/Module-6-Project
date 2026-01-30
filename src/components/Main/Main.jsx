import React, { useEffect, useState } from 'react'
import './Main.css'
import MovieCard from '../MovieCard/MovieCard'
import popcorn_banner from '../../assets/popcorn_banner.jpg'
import search__btn from '../../assets/search__btn.png'
import axios from 'axios'

const Main = () => {

  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  async function getMovies(searchTerm) {
    const { data } = await axios.get("https://www.omdbapi.com/?apikey=a5e7ab33&s=harry")
    const movieData = data.Search
    setMovies(movieData);
    setSearchValue(searchTerm);
    console.log(movieData)
  }

 useEffect(() => {
  getMovies();
 }, [])
  

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
                        <img className="search__img" src={search__btn} onClick={getMovies(searchValue)} alt=""/>
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
            <select id="movieSort" onChange={(event) => sortChange(event.target.value)}>
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
          {
            movies.map((movie) => 
            <MovieCard movie={movie} key={movie.imdbID}
            />)
          }
        </div>
      </div>
  </section>
  )
}


export default Main;
