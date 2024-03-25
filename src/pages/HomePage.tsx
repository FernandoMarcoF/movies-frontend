import { useParams } from 'react-router-dom'
import { Movies } from "../components/Movies"
import { IMovie } from "../interfaces/movie.interface"

export const HomePage = ({ movies }: { movies: IMovie[] }) => {
    const { genre } = useParams();

    let showMovies = []
    if (genre !== undefined) {
        showMovies = movies.map((movie, index) => {
            return (movie.genre_names.includes(genre)) ? { movie, index } : null
        }).filter(item => item !== null);

    } else {
        showMovies = movies.map((movie, index) => { return { movie, index } })
    }
    return (
        <div className='movies-container'>
            {(showMovies.length > 0)
                ? <Movies movies={movies}></Movies>
                : <h2 style={{ color: 'white' }}>Cargando películas...</h2>}
        </div>
    )
}