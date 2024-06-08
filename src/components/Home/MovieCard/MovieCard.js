import { useState } from 'react'


function MovieCard({movieCard}) {
  return (
    <div>
        <div className='movie'>
            <div>
                <p>{movieCard.Year}</p>
            </div>

            <div>
                <img src={movieCard.Poster !== 'N/A' ? movieCard.Poster : 'https://via.placeholder.com/400'} alt={movieCard.Title}/>
            </div>

            <div>
                <span>{movieCard.Type}</span>
                <h3>{movieCard.Title}</h3>
            </div>
        </div>
    </div>
  )
}

export default MovieCard