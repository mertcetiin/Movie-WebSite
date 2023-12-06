"use client"
import { useMovieStore } from '@/state/store'
import React from 'react'

function MovieDetail() {

    const moviesState = useMovieStore((state) => state.moviesState);
    const movieId = useMovieStore((state) => state.movieId);
    const selectedMovie = moviesState.find((item) => item.id === movieId);

    return (
        <div>
            {selectedMovie && (
                <div key={selectedMovie.id}>
                    <h3>{selectedMovie.title}</h3>
                    <img src={selectedMovie.imgPath} alt="" />
                    <p>{selectedMovie.info}</p>
                    <button>Play</button>
                </div>
            )}
        </div>
    )
}

export default MovieDetail