import React from 'react'
import MovieControls from './MovieControls'

function MovieCard({movie , type}) {
  return (
    <div className='movie-card'>
    <div className="overlay"></div>
    {
            movie.Poster ? (
                <img src={movie.Poster} alt={movie.Title}></img>
            ): <div className='filter-poster'></div>
    }
    <MovieControls movie={movie} type={type}/>
</div>
  )
}

export default MovieCard