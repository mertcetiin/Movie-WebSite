"use client";
import { useMovieStore } from '@/state/store';


function MoviesIndex() {

    const moviesState = useMovieStore((state) => state.moviesState)

    return (
        <div className="mt-24 ml-16 mr-16 cursor-pointer">
            <h2 className="mb-4 text-uppercase text-2xl font-semibold tracking-wider">Favori Movies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {moviesState.map((item) => (
                    <button key={item.id} className="overflow-hidden border rounded-lg relative shadow-md transition-transform duration-300 transform hover:scale-125">
                        <img className="w-full h-48 object-cover" src={item.imgPath} alt={item.title} />
                    </button>
                ))}
            </div>
        </div>
    )
}

export default MoviesIndex