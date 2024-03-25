import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className='header'>
            <div className='navbar'>
                <ul>
                    <li><NavLink className='navbar-link' to={`/`}>Películas</NavLink></li>
                    <li><NavLink className='navbar-link' to={`/`}>Series</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}