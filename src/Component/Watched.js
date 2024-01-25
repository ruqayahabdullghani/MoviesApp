import React from 'react'
import MovieCard from './MovieCard'
import { useMovieContext } from './Context/GlobalState';

function Watched() {
  const MovieContext= useMovieContext();

  return (
    <div className="movie-page">
    <div className="container">
      <div className="header">
      <h1 className='heading'>Watched Movies</h1>
      <span className='count-pill'>  
      {MovieContext.watchlist.length}
        {MovieContext.watchlist.length ===1 ? " Movie" : " Movies"}
        </span>
      </div>
      <hr></hr>
      {
              MovieContext.watched.length > 0 ? (  <div className="movie-grid">
                {MovieContext.watched.map((movie)=>(
                <MovieCard key={movie.imdbID} movie={movie} type='watched'/>
              ))}
              </div>):(<h2 className='no-movies'>No movies in your list, add some!</h2>)
          }
      </div>
      </div>
        )
}

export default Watched