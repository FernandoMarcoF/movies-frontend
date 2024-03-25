import { Link } from 'react-router-dom'
import { IMovie } from "../interfaces/movie.interface"

export const Card = ({ movie, id }: { movie: IMovie, id: number }) => {
    const baseUrl = 'https://image.tmdb.org/t/p/'
    const size = 'w500'
    const backdropsEs = movie.images.backdrops.filter(image => image.iso_639_1 === 'es')
    const backdropsEn = movie.images.backdrops.filter(image => image.iso_639_1 === 'en')

    let url = ''

    if (backdropsEs.length > 0) {
        url = `${baseUrl}${size}${backdropsEs[0].file_path}`
    } else if (backdropsEn.length > 0) {
        url = `${baseUrl}${size}${backdropsEn[0].file_path}`
    } else {
        url = `${baseUrl}${size}${movie.backdrop_path}`
    }
    const divImgStyle = { backgroundImage: `url(${url})` }

    return (
        <div className='card'>
            <Link className='link-card' to={`/movie/${id}`}>
                <div className="card-image" style={divImgStyle}></div>
            </Link>
        </div>
    )
}