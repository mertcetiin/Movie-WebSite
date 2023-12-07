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
                    <div className="flex flex-col col-span-2">
                        <img className="w-full rounded h-auto mb-4" src={selectedMovie.imgPath} alt={selectedMovie.title} />
                        <h2 className="text-xl font-semibold mb-4">{selectedMovie.title}</h2>
                        <p className="text-white text-m">{selectedMovie.info}</p>
                        <button className="mt-4 w-60 bg-white text-black px-4 py-2 rounded-full hover:bg-gray-800 hover:text-white">
                            Play
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default MovieDetail;