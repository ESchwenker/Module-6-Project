import React from 'react'
import './Main.css'
import popcorn_banner from '../../assets/popcorn_banner.jpg'
import search__btn from '../../assets/search__btn.png'
import axios from 'axios'

const Main = () => {

const moviesWrapper = document.querySelector('.movies');
const searchName = document.querySelector('.searchName');

let currentMovies = []

function searchChange(event) {
  getMovies(event.target.value)
  searchName.innerHTML = event.target.value
}

async function getMovies(searchTerm) {
  const { data } = await axios.get("https://www.omdbapi.com/?apikey=a5e7ab33&s=harry")
  const movieData= { data }

function displayMovies(movieList) {
    moviesWrapper.innerHTML = movieList.slice(0, 9).map((movie) => {
    return `<div class="movie">
              <img class="movie__poster" src="${movie.Poster}">
              <h3 class="movie__title">${movie.Title}</h3>
              <h3 class="movie__year">${movie.Year}</h3>
            </div>`
  }).join('');
}

  function sortChange(event) {
  const sortOption = event.target.value

  let sortedMovies = [...currentMovies]

  if (sortOption === "newest") {
    sortedMovies.sort((a, b) => b.Year - a.Year)
  } else if (sortOption === "oldest") {
    sortedMovies.sort((a, b) => a.Year - b.Year)
  } else if (sortOption === "name") {
    sortedMovies.sort((a, b) => a.Title.toLowerCase().localeCompare(b.Title.toLowerCase()))
  }

  displayMovies(sortedMovies);
}


}

getMovies();

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
                        onChange={searchChange(event)}
                        placeholder="Find your flick"/>
                        <img className="search__img" src={search__btn} alt=""/>
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
              <span className="searchName"></span>
            </h2>
            <select id="movieSort" onChange={sortChange(event)}>
             <option value="" disabled selected>Sort by</option>
             <option value="name">Name, A to Z</option>
             <option value="newest">Release Date, Newest</option>
             <option value="oldest">Release Date, Oldest</option>
            </select>
          </div>
        </div>
      </div>
      <div className="all__movies">
        <div className="movies"></div>
        {/* <div className="movie">
            <img className="movie__poster" src="https://m.media-amazon.com/images/M/MV5BNTU1MzgyMDMtMzBlZS00YzczLThmYWEtMjU3YmFlOWEyMjE1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"/>
            <h3 className="movie__title">Harry Potter</h3>
            <h3 className="movie__year">2001</h3>
        </div>
            <div className="movie">
            <img className="movie__poster" src="https://m.media-amazon.com/images/M/MV5BNTU1MzgyMDMtMzBlZS00YzczLThmYWEtMjU3YmFlOWEyMjE1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"/>
            <h3 className="movie__title">Harry Potter</h3>
            <h3 className="movie__year">2001</h3>
        </div>
            <div className="movie">
            <img className="movie__poster" src="https://m.media-amazon.com/images/M/MV5BNTU1MzgyMDMtMzBlZS00YzczLThmYWEtMjU3YmFlOWEyMjE1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"/>
            <h3 className="movie__title">Harry Potter</h3>
            <h3 className="movie__year">2001</h3>
        </div>
            <div className="movie">
            <img className="movie__poster" src="https://m.media-amazon.com/images/M/MV5BNTU1MzgyMDMtMzBlZS00YzczLThmYWEtMjU3YmFlOWEyMjE1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"/>
            <h3 className="movie__title">Harry Potter</h3>
            <h3 className="movie__year">2001</h3>
        </div>
            <div className="movie">
            <img className="movie__poster" src="https://m.media-amazon.com/images/M/MV5BNTU1MzgyMDMtMzBlZS00YzczLThmYWEtMjU3YmFlOWEyMjE1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"/>
            <h3 className="movie__title">Harry Potter</h3>
            <h3 className="movie__year">2001</h3>
        </div> */}
      </div>
    </section>
  )
}

export default Main
