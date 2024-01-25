import React from 'react'
import { useMovieContext } from './Context/GlobalState'
import  * as actions from './Context/ActionsTypes'

function MovieControls({ movie, type }) {
  const MovieContext = useMovieContext();

  return (
    <div className='inner-card-controls'>
      {
        type === "watchlist" &&(
          <>
          {/* add to watchlist */}
          <button onClick={()=> MovieContext.MoviesDispatch({
            type: actions.ADD_MOVIE_TO_WATCHED, payload: movie
          })}
           className="ctrl-btn">
          <i className="fa-solid fa-eye"></i>
          </button>

          {/* remove from watchlist */}
          <button className="ctrl-btn" onClick={()=> MovieContext.MoviesDispatch({
            type: actions.REMOVE_MOVIE_FROM_WATCHLIST, payload: movie.imdbID
            })}>
              <i className='fa-fw fa fa-times' />
              </button>
          </>
        )
      }
      {
        type === "watched" &&(
          <>
          {/* add from watched list */}
          <button className="ctrl-btn" onClick={()=> MovieContext.MoviesDispatch({
            type: actions.MOVE_TO_WATCHLIST, payload: movie
          })}>
            <i className="fa-solid fa-eye-slash"></i>
            </button>
            {/* remove from watched list */}
          <button className="ctrl-btn" onClick={()=> MovieContext.MoviesDispatch({
            type: actions.REMOVE_FROM_WATCHED, payload: movie.imdbID
          })}>
          <i className='fa-fw fa fa-times' />
          </button>
          </>
        )
      }
    </div>
  )
}

export default MovieControls