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
        // <section className="text-gray-600 body-font overflow-hidden">
        //     <div className="container px-5 py-24 mx-auto">
        //         {selectedMovie && (
        //             <div key={selectedMovie.id} className="lg:w-4/5 mx-auto flex flex-wrap">
        //                 <img className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={`https://www.themoviedb.org/t/p/w500_and_h282_face${selectedMovie.poster_path}`} />
        //                 <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        //                     <h2 className="text-sm title-font text-gray-500 tracking-widest">Genres</h2>
        //                     <h1 className="text-white text-3xl title-font font-medium mb-1">{selectedMovie.title}</h1>
        //                     <h1 className="text-white text-3xl title-font font-medium mb-1">{selectedMovie.original_name}</h1>
        //                     <div className="flex mb-4">
        //                         <span className="flex items-center">
        //                             <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-gray-500" viewBox="0 0 24 24">
        //                                 <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
        //                             </svg>
        //                             <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-gray-500" viewBox="0 0 24 24">
        //                                 <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
        //                             </svg>
        //                             <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-gray-500" viewBox="0 0 24 24">
        //                                 <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
        //                             </svg>
        //                             <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-gray-500" viewBox="0 0 24 24">
        //                                 <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
        //                             </svg>
        //                             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-gray-500" viewBox="0 0 24 24">
        //                                 <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
        //                             </svg>
        //                             <span className="text-gray-600 ml-3">4 Reviews</span>
        //                         </span>
        //                     </div>
        //                     <p className="leading-relaxed text-gray-400">{selectedMovie.overview}</p>
        //                     <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
        //                     </div>
        //                     <div className="flex">
        //                         <button className="flex text-black bg-white border-0 py-2 px-24 focus:outline-none rounded-full hover:bg-gray-800 hover:text-white">Play</button>
        //                     </div>
        //                 </div>
        //             </div>
        //         )}
        //     </div>
        // </section>



        <div>
            <div className='flex mt-10 max-w-sm w-full bg-white shadow-md rounded-lg overflow-hidden mx-auto'>
                {selectedMovie && (
                    <div className="overflow-hidden rounded-xl relative transform hover:-translate-y-2 transition ease-in-out duration-500 shadow-lg hover:shadow-2xl movie-item text-white movie-card" data-movie-id="438631">
                        <div className="absolute inset-0 z-10 transition duration-300 ease-in-out bg-gradient-to-t from-black via-gray-900 to-transparent"></div>
                        <div className="relative cursor-pointer group z-10 px-10 pt-10 space-y-6 movie_info" data-lity="">
                            <div className="poster__info align-self-end w-full">
                                <div className="h-32"></div>
                                <div className="space-y-6 detail_info">
                                    <div className="flex flex-col space-y-2 inner">
                                        <a className="relative flex items-center w-min flex-shrink-0 p-1 text-center text-white bg-red-500 rounded-full group-hover:bg-red-700" data-unsp-sanitized="clean">
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
                                            <div className="release">2021-09-15</div>
                                            <div className="text-sm text-gray-400">Release date:</div>
                                        </div>
                                        <div className="flex flex-col datos_col">
                                            <div className="release">155 min</div>
                                            <div className="text-sm text-gray-400">Runtime:</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col overview">
                                        <div className="text-xs text-gray-400 mb-2">Overview:</div>
                                        <p className="text-xs text-gray-100 mb-6">
                                            {selectedMovie.overview}
                                        </p>
                                    </div>
                                </div>
                                <div data-countdown="2021-09-15" className="absolute inset-x-0 top-0 pt-5 w-full mx-auto text-2xl uppercase text-center drop-shadow-sm font-bold text-white">00 Days 00:00:00</div>
                            </div>
                        </div>
                        <img className="absolute inset-0 transform w-full -translate-y-4" src={`https://www.themoviedb.org/t/p/w500_and_h282_face${selectedMovie.poster_path}`} />
                        <div className="poster__footer flex flex-row relative pb-10 space-x-4 z-10">
                            <a
                                className="flex items-center py-2 px-4 rounded-full mx-auto text-white bg-red-500 hover:bg-red-700"
                                href="http://www.google.com/calendar/event?action=TEMPLATE&amp;dates=20210915T010000Z%2F20210915T010000Z&amp;text=Dune%20%2D%20Movie%20Premiere&amp;location=http%3A%2F%2Fmoviedates.info&amp;details=This%20reminder%20was%20created%20through%20http%3A%2F%2Fmoviedates.info"
                                target="_blank"
                                data-unsp-sanitized="clean"
                            >
                                <div className="text-sm text-white ml-2">Play</div>
                            </a>
                        </div>
                    </div>
                )}


            </div>
        </div>

    )
}

export default MovieDetail;