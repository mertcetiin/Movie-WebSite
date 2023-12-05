"use client"
import { useMovieStore } from '@/state/store'
import React from 'react'

function MovieDetail() {

    const moviesState = useMovieStore((state) => state.moviesState);

    return (
        <div>
            {moviesState.map((item) => (
                <div>
                    <h3>{item.title}</h3>
                </div>
            ))}
        </div>
    )
}

export default MovieDetail