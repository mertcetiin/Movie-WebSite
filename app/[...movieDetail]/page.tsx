"use client"
import { useMovieStore } from '@/state/store'
import { notFound } from 'next/navigation';
import React from 'react'

function MovieDetail() {

    const trendingMovies = useMovieStore((state) => state.trendingMovies)
    const movieId = useMovieStore((state) => state.movieId);
    const selectedMovie = trendingMovies.find((item) => item.id === movieId);

    if (!selectedMovie) {
        notFound();
    }

    return (
        <div className='flex mt-10 max-w-lg w-full bg-white shadow-md rounded-lg overflow-hidden mx-auto'>
            {selectedMovie && (
                <div className="overflow-hidden rounded-xl relative transform hover:-translate-y-2 transition ease-in-out duration-500 shadow-lg hover:shadow-2xl movie-item text-white movie-card">
                    <div className="absolute inset-0 z-10 transition duration-300 ease-in-out bg-gradient-to-t from-black via-gray-900 to-transparent"></div>
                    <div className="relative cursor-pointer group z-10 px-10 pt-10 space-y-6 movie_info" data-lity="">
                        <div className="poster__info align-self-end w-full">
                            <div className="h-32"></div>
                            <div className="space-y-6 detail_info">
                                <div className="flex flex-col space-y-2 inner">
                                    <a className="relative flex items-center w-min flex-shrink-0 p-1 text-center text-white bg-gray-500 rounded-full group-hover:bg-red-700" data-unsp-sanitized="clean">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM9.555 7.168A1 1 0 0 0 8 8v4a1 1 0 0 0 1.555.832l3-2a1 1 0 0 0 0-1.664l-3-2z" clip-rule="evenodd"></path>
                                        </svg>
                                        <div className="absolute transition opacity-0 duration-500 ease-in-out transform group-hover:opacity-100 group-hover:translate-x-16 text-xl font-bold text-white group-hover:pr-2">Trailer</div>
                                    </a>
                                    <h3 className="text-2xl font-bold text-white" data-unsp-sanitized="clean">{selectedMovie.title}</h3>
                                    <div className="mb-0 text-lg text-gray-400">{selectedMovie.original_name}</div>
                                </div>
                                <div className="flex flex-row justify-between datos">
                                    <div className="flex flex-col datos_col">
                                        <div className="popularity">{selectedMovie.popularity}</div>
                                        <div className="text-sm text-gray-400">Popularity:</div>
                                    </div>
                                    <div className="flex flex-col datos_col">
                                        <div className="release">{selectedMovie.vote_average}</div>
                                        <div className="text-sm text-gray-400">IMDB</div>
                                    </div>
                                </div>
                                <div className="flex flex-col overview">
                                    <div className="text-xs text-gray-400 mb-2">Overview:</div>
                                    <p className="text-sm text-gray-100 mb-6">
                                        {selectedMovie.overview}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className="absolute inset-0 transform w-full -translate-y-4" src={`https://www.themoviedb.org/t/p/w500_and_h282_face${selectedMovie.poster_path}`} />
                    <div className="poster__footer flex flex-row relative pb-10 space-x-4 z-10">
                        <a className="flex items-center py-2 px-4 rounded-full mx-auto text-white bg-red-500 hover:bg-red-700"
                            href=""
                            target="_blank"
                            data-unsp-sanitized="clean" >
                            <div className="w-20 ml-14 text-sm text-white">Play</div>
                        </a>
                    </div>
                </div>
            )}
        </div>
    )
}

export default MovieDetail;