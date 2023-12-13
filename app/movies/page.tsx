"use client";
import { useMovieStore } from "@/state/store";
import { useEffect } from "react";
import { useRouter } from 'next/navigation';


function MoviesPage() {

    const trendingMovies = useMovieStore((state) => state.trendingMovies)
    const setTrendingMovies = useMovieStore((state) => state.setTrendingMovies)

    const router = useRouter();

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

        fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
            .then(res => res.json())
            .then(data => setTrendingMovies(data.results))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="flex flex-wrap gap-4 ml-10 mr-10">
            {trendingMovies.map((item) => (
                <div key={item.id} className="relative overflow-hidden transition-transform border border-gray-500 hover:transform hover:scale-110 hover:z-10 flex-grow">
                    <img className="w-full h-48 object-cover" src={`https://www.themoviedb.org/t/p/w500_and_h282_face${item.backdrop_path}`} alt={item.title} />
                    <button onClick={() => handleRouter(item.id)}>
                        <div className="absolute bottom-0 p-4 w-full flex flex-col justify-end bg-gradient-to-t from-transparent to-black opacity-0 hover:opacity-100 transition-opacity">
                            <div className="text-white font-bold mb-2">{item.title}</div>
                            <div className="text-white text-xs italic">{`${item.overview.slice(0, 106)}...`}</div>
                        </div>
                    </button>
                </div>
            ))}
        </div>
    )
}

export default MoviesPage;