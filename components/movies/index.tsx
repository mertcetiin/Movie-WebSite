"use client";
import { useMovieStore } from '@/state/store';


function MoviesIndex() {

    const moviesState = useMovieStore((state) => state.moviesState)

    return (
        <div className="mt-32 ml-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {moviesState.map((item) => (
                    <div key={item.id} className="overflow-hidden border rounded-lg relative shadow-md transition-transform duration-300 transform hover:scale-125">
                        <h3 className="text-center">{item.title}</h3>
                        <img className="w-full h-48 object-cover" src={item.imgPath} alt={item.title} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MoviesIndex