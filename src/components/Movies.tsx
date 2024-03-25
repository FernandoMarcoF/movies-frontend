import { useParams } from 'react-router-dom'
import { Card } from "../components/Card"
import { IMovie } from "../interfaces/movie.interface"

export const Movies = ({ movies }: { movies: IMovie[] }) => {
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
        <div className='grid-container-wrapper'>
            <div className='grid-container'>
                {showMovies.map((movie) => {
                    return (
                        <Card movie={movie.movie} id={movie.index} key={movie.movie.title}></Card>
                    )
                })}
            </div>
        </div>
    )
}