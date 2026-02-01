import React, { useEffect, useRef, useState } from 'react'
import './Main.css'
import MovieCard from '../MovieCard/MovieCard'
import popcorn_banner from '../../assets/popcorn_banner.jpg'
import search__btn from '../../assets/search__btn.png'
import axios from 'axios'
import { useSearchParams } from 'react-router-dom'

const Main = () => {

  const [movies, setMovies] = useState([]);
  const [displayMovies, setDisplayMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams()
  const urlSearch = searchParams.get("search") || ""
  const [isLoading, setIsLoading] = useState(false)
  const moviesRef = useRef(null)

  async function getMovies(searchTerm) {
    if (!searchTerm) return

    setIsLoading(true)

    try {
    const { data } = await axios.get(`https://www.omdbapi.com/?apikey=a5e7ab33&s=${searchTerm}`)
    const movieData = data.Search || []

      setMovies(movieData);
      setDisplayMovies(movieData);
      setSearchValue(searchTerm);
    } catch (error) {
      console.error(error)
      setDisplayMovies([])
    } finally {
      setIsLoading(false)
    }
  }

  console.log("displayMovies:", displayMovies);
  console.log("searchValue:", searchValue);

  function sortBy(filter) {
    console.log(filter);

    
    let sortedMovies = [...displayMovies]

    if (filter === "newest") {
      sortedMovies.sort((a, b) => b.Year - a.Year)
    } else if (filter === "oldest") {
      sortedMovies.sort((a, b) => a.Year - b.Year)
    } else if (filter === "name") {
      sortedMovies.sort((a, b) => a.Title.toLowerCase().localeCompare(b.Title.toLowerCase()))
    }

    setDisplayMovies(sortedMovies)
  }

  useEffect(() => {
    if (urlSearch) {
      setSearchValue(urlSearch)
      getMovies(urlSearch)
    }
  }, [urlSearch])

  useEffect(() => {
    if (displayMovies.length > 0) {
      moviesRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }, [displayMovies])
  

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
                        onKeyDown={(event) => {
                          if (event.key === "Enter" && searchValue.trim()) { 
                            setSearchParams (
                              { search: searchValue}, 
                              { replace: true}
                          )
                        }}}
                        placeholder="Find your flick" />
                        <img className="search__img" src={search__btn} 
                        onClick={() => { if(searchValue.trim()) { setSearchParams({ search: searchValue}, {replace:true})}}} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="options__container">
        <div className="options__row">
          <div id="info" className={`options__header ${searchValue && !isLoading ? "show" : "hide"}`}>
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
      <div className="all__movies" ref={moviesRef}>
        <div className="movies">
          {isLoading?(<div className="loading">Sit tight, loading movies...</div>) :
            displayMovies.length === 0 && searchValue ? (
            <div className="no-results">
              Sorry, no results found for "{searchValue}"
                  </div>) : (displayMovies.length > 0 && (
              displayMovies.slice(0, 9).map(movie => (
              <MovieCard movie={movie} key={movie.imdbID}
            />)))
            )}
        </div>
      </div>
  </section>
  )
}


export default Main;
