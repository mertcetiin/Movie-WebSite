"use client";
import { useMovieStore } from "@/state/store";
import { useEffect } from "react";
import { useRouter } from 'next/navigation';

function Seriespage() {

    const trendingMovies = useMovieStore((state) => state.trendingMovies)
    const setTrendingMovies = useMovieStore((state) => state.setTrendingMovies)

    const router = useRouter();
    // Navigates to the movie detail page with the specified movie ID
    const handleRouter = (id: number) => {
        useMovieStore.setState({ movieId: id })
        router.push(`/movieDetail/${id}`)
    }

    useEffect(() => {

        const apiKey = process.env.NEXT_PUBLIC_REACT_APP_API_KEY;

        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: apiKey ? `Bearer ${apiKey}` : '',
            }
        };

        fetch('https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc', options)
            .then(res => res.json())
            .then(data => setTrendingMovies(data.results))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="mt-14 mx-6 cursor-pointer">
            <h2 className="mb-4 text-uppercase text-2xl font-semibold uppercase tracking-wide">Series</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {trendingMovies.map((item) => (
                    <button onClick={() => handleRouter(item.id)} key={item.id} className="overflow-hidden border rounded-lg relative shadow-md transition-transform duration-300 transform hover:scale-125 hover:z-10">
                        <img className="w-full h-48 object-cover" src={`https://www.themoviedb.org/t/p/w500_and_h282_face${item.backdrop_path}`} alt={item.title} />
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Seriespage;