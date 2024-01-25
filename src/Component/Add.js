import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ResultCard from './ResultCard';

function Add() {
  const [searchValue , setSerachValue] = useState("");
  const [movies , setMovies] = useState([]);

  useEffect(()=>{
    axios.get(`http://www.omdbapi.com/?s=${searchValue}&apikey=7c171f32`).then((response)=> {
      if(response.data.Search){
        setMovies(response.data.Search)
      }
  }).catch((error) => console.log(error))

  },[searchValue])
  return (
    <div className='add-page'>
    <div className="container">
      <div className="add-content">
        <div className="input-wrapper">
            <input type='text' placeholder='Search for a movie' 
            value={searchValue} 
            onChange={(e)=> setSerachValue(e.target.value)}/>
          </div>
          {
             movies.length > 0 && (<ul className='results'>
               {movies.map((movie)=>
                <li key={movie.imdbID}>{<ResultCard movie={movie}/>}</li>)}
             </ul>)
            }
      
        </div>
      </div>
    </div>  
    
    )
}

export default Add