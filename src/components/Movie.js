import { useState, useEffect } from 'react'
import { getMovies } from '../lib/services/movieService'

const Movie = () => {

const [movie, setMovie] = useState([])

const getMovieData = async () => {
    const movies = await getMovies([])
    setMovie(movies)
}
useEffect(() => {
    getMovieData()
}, [])

return (
    <main>
        <h1 className='text-pink-600'>ALOHA 🌴</h1>
        {movie.map((film) => (
            <h1 key={film._id}>{film.title}</h1>
        ))}
    </main>
)
}

export default Movie;