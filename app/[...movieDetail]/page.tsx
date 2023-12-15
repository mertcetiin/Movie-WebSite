"use client"
import { useMovieStore } from '@/state/store'
import React from 'react'

function MovieDetail() {

    const trendingMovies = useMovieStore((state) => state.trendingMovies)
    const movieId = useMovieStore((state) => state.movieId);
    const selectedMovie = trendingMovies.find((item) => item.id === movieId);



    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                {selectedMovie && (
                    <div key={selectedMovie.id} className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={`https://www.themoviedb.org/t/p/w500_and_h282_face${selectedMovie.poster_path}`} />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">Genres</h2>
                            <h1 className="text-white text-3xl title-font font-medium mb-1">{selectedMovie.title}</h1>
                            <h1 className="text-white text-3xl title-font font-medium mb-1">{selectedMovie.original_name}</h1>
                            <div className="flex mb-4">
                                <span className="flex items-center">
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-gray-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-gray-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-gray-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-gray-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-gray-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <span className="text-gray-600 ml-3">4 Reviews</span>
                                </span>
                            </div>
                            <p className="leading-relaxed text-gray-400">{selectedMovie.overview}</p>
                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                            </div>
                            <div className="flex">
                                <button className="flex text-black bg-white border-0 py-2 px-24 focus:outline-none rounded-full hover:bg-gray-800 hover:text-white">Play</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default MovieDetail;