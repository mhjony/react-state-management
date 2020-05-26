import React, { useState, createContext } from 'react'

export const MovieContext = createContext()

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([
        {
            name: 'Prison Break',
            price: '10€',
            id: 1357
        },
        {
            name: 'Venom',
            price: '15€',
            id: 2468
        },
        {
            name: 'Aquaman',
            price: '18€',
            id: 9753
        }
    ])
    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}