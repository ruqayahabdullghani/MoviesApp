import React  from 'react'
import { useMovieContext } from './Context/GlobalState'
import  * as actions from './Context/ActionsTypes'

function ResultCard({movie}) {
  const MovieContext = useMovieContext();

  const storedMovie = MovieContext.watchlist.find(
    (o)=> o.imdbID === movie.imdbID);
    
    const storedWatchedMovie = MovieContext.watched.find(
      (o) => o.imdbID === movie.imdbID
    );

    const watchlistDisabled = storedMovie ? true : 
    storedWatchedMovie ? true : false
    
    const watchedDisabled = storedWatchedMovie ? true : false  

  return (
    <div className='result-card'>
    <div className='poster-wrapper'>
        {
            movie.Poster ? (
                <img src={movie.Poster} alt=''></img>
            ): <div className='filter-poster'></div>
        }
        </div>
        <div className="info">
        <div className="header">
            <h3 className='title'>{movie.Title}</h3>
            {movie.Year ? <h4 className='release-date'>{movie.Year}</h4> : '-'}
        </div>
        <div className="controls">
        <button
         className='btn'
         disabled={watchlistDisabled}
         onClick={()=> MovieContext.MoviesDispatch({type:actions.ADD_MOVIE_TO_WATCHLIST ,payload: movie})}>
              Add to Watchlist
        </button>
        <button
         className='btn'
         onClick={()=> MovieContext.MoviesDispatch({type:actions.ADD_MOVIE_TO_WATCHED,payload: movie})}
         disabled={watchedDisabled}>Add to Watched
        </button>
    </div>
    </div>
</div>
  )
}

export default ResultCard