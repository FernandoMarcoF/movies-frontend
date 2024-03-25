import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { IMovie } from "../interfaces/movie.interface"

// import icon1080p from '../assets/icons/fullHD_1080p_icon.svg'
// import icon4k from '../assets/icons/fullHD_4k_icon.svg'
import play from '../assets/icons/play_icon.svg'

export const CardPage = ({ movies }: { movies: IMovie[] }) => {
    const { id } = useParams();
    const [isOpen, setIsOpen] = useState(false);
    const baseUrl = 'https://image.tmdb.org/t/p/'
    const size = 'original'

    const idMovie: number = Number(id) | 0

    const movie = movies[idMovie];
    const divImgStyle = { backgroundImage: `url(${baseUrl}${size}${movie.backdrop_path})` }
    const releaseDate = new Date(Date.parse(movie.release_date));

    const videos = movie.videos.filter(elem => elem.site === 'YouTube' && elem.type === 'Trailer') 
    console.log('video-->', `https://www.youtube.com/embed/${videos[0].key}`)


    console.log(movie)

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    const handleOverlayClick: React.MouseEventHandler<HTMLDivElement> = (event) => {
        if (event.target === event.currentTarget) {
            closeModal();
        }
    }

    return (
        <div className='cardPage-container'>
            <div className="cardPage-image-container" style={divImgStyle}>
                <div className='cardPage-text-container'>
                    <div className='cardPage-text-content'>
                        <h1>{movie.title}</h1>
                        <p>{movie.overview}</p>
                        <div className='icons-list'>
                            <span>{releaseDate.getFullYear()}</span>
                        </div>
                        <div className='genres-list'>
                            {movie.genre_names.map((genre, index) => {
                                return (<>
                                    <Link to={`/${genre}`}>
                                        {genre}
                                    </Link>
                                    {((movie.genre_names.length - 1) > index) && <span>&nbsp;-&nbsp;</span>}
                                </>)
                            })}
                        </div>
                        <a type='button' onClick={openModal} className='icon-play'>
                            <img src={play} alt="Play" />
                            <span className='icon-text'>Trailer</span>
                        </a>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="modal-overlay" onClick={handleOverlayClick}>
                    <div className="modal">
                        <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${videos[0].key}`}
                        ></iframe>
                    </div>
                </div>
            )}
        </div>
    )
}


