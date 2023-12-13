"use client";
import { useMovieStore } from '@/state/store';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
require('dotenv').config();

function FavoriIndex({ label }: any) {

    const trendingMovies = useMovieStore((state) => state.trendingMovies)
    const setTrendingMovies = useMovieStore((state) => state.setTrendingMovies)

    const router = useRouter();

    const handleRouter = (id: number) => {
        useMovieStore.setState({ movieId: id })
        router.push(`/movieDetail/${id}`)
    }


    const favoriteMovies = trendingMovies.slice(0, 4)

    useEffect(() => {

        const apiKey = process.env.NEXT_PUBLIC_REACT_APP_API_KEY;

        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: apiKey ? `Bearer ${apiKey}` : '',
            }
        };

        fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
            .then(res => res.json())
            .then(data => setTrendingMovies(data.results))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="mt-20 ml-16 mr-16 cursor-pointer">
            <h2 className="mb-4 text-uppercase text-2xl font-semibold tracking-wider">{label}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {favoriteMovies.map((item) => (
                    <button onClick={() => handleRouter(item.id)} key={item.id} className="overflow-hidden border rounded-lg relative shadow-md transition-transform duration-300 transform hover:scale-125 hover:z-10">
                        <img className="w-full h-48 object-cover" src={`https://www.themoviedb.org/t/p/w500_and_h282_face${item.backdrop_path}`} alt={item.title} />
                    </button>
                ))}
            </div>
        </div>
    )
}

export default FavoriIndex;