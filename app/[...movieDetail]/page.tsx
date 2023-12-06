"use client"
import { useMovieStore } from '@/state/store'
import React from 'react'

function MovieDetail() {

    const moviesState = useMovieStore((state) => state.moviesState);
    const movieId = useMovieStore((state) => state.movieId);
    const selectedMovie = moviesState.find((item) => item.id === movieId);

    return (
        <div className="container mx-auto mt-8">
            {selectedMovie && (
                <div key={selectedMovie.id} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="flex flex-col">
                        <h2 className="text-3xl font-semibold mb-4">{selectedMovie.title}</h2>
                        <img className="w-full h-auto mb-4" src={selectedMovie.imgPath} alt={selectedMovie.title} />
                        <p className="text-gray-600">{selectedMovie.info}</p>
                        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                            Play
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default MovieDetail;