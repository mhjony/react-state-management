import React, { useContext, useState } from 'react'
import { MovieContext } from './MovieContext'

const AddMovie = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [movies, setMovies] = useContext(MovieContext)

    const nameHandler = (e) => {
        setName(e.target.value)
    }

    const priceHandler = (e) => {
        setPrice(e.target.value)
    }

    const addMovieHandler = e => {
        e.preventDefault();
        setMovies(preMovies => [...preMovies, { name: name, price: price }])
    }

    return (
        <form onSubmit={addMovieHandler}>
            <input type="text" name="name" value={name} onChange={nameHandler} />
            <input type="text" name="price" value={price} onChange={priceHandler} />
            <button>Submit</button>
        </form>
    )
}

export default AddMovie;