import React, { useContext } from 'react'
import { MovieContext } from './MovieContext'

const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext)
    return (
        <div className="nav">
            <ul>
                <li><h3>Mahmudul</h3></li>
                <li><p>List of movies: {movies.length}</p></li>
            </ul>
        </div>
    )
}

export default Nav;