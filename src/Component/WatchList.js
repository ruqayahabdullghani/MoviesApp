import React from 'react'
import { useMovieContext } from './Context/GlobalState'
import MovieCard from './MovieCard';

function WatchList() {
  const MovieContext= useMovieContext();
  return (
    <div className="movie-page">
    <div className="container">
      <div className="header">
      <h1 className='heading'>My Watchlist</h1>
      <span className='count-pill'>
        {MovieContext.watchlist.length}
        {MovieContext.watchlist.length ===1 ? " Movie" : " Movies"}

        
        </span>
      </div>
      <hr></hr>
      {MovieContext.watchlist.length > 0 ? 
          (<div className="movie-grid">
             {MovieContext.watchlist.map((movie)=>(
                <MovieCard key={movie.imdbID} movie={movie} type="watchlist"/>
              ))}
         </div>):(<h2  className='no-movies'>No movies in your list, add some!</h2>)
        
        }

      </div>
      </div>
  )
}

export default WatchList