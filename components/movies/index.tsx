"use client";
import { useMovieStore } from '@/state/store';
import { useRouter } from 'next/navigation';


function MoviesIndex() {


    const moviesState = useMovieStore((state) => state.moviesState)
    const router = useRouter();

    const handleRouter = (id: number) => {
        useMovieStore.setState({ movieId: id })
        router.push(`/movieDetail/${id}`)
    }

    const favoriteMovies = moviesState.slice(0, 4)
    const popularMovies = moviesState.slice(4, 8)
    const mostMovies = moviesState.slice(8, 12)


    return (
        <>
            <div className="mt-24 ml-16 mr-16 cursor-pointer">
                <h2 className="mb-4 text-uppercase text-2xl font-semibold tracking-wider">Favori Movies</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {favoriteMovies.map((item) => (
                        <button onClick={() => handleRouter(item.id)} key={item.id} className="overflow-hidden border rounded-lg relative shadow-md transition-transform duration-300 transform hover:scale-125">
                            <img className="w-full h-48 object-cover" src={item.imgPath} alt={item.title} />
                        </button>
                    ))}
                </div>
            </div>
            <div className="mt-20 ml-16 mr-16 cursor-pointer">
                <h2 className="mb-4 text-uppercase text-2xl font-semibold tracking-wider">Popular Movies</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {popularMovies.map((item) => (
                        <button onClick={() => handleRouter(item.id)} key={item.id} className="overflow-hidden border rounded-lg relative shadow-md transition-transform duration-300 transform hover:scale-125">
                            <img className="w-full h-48 object-cover" src={item.imgPath} alt={item.title} />
                        </button>
                    ))}
                </div>
            </div>

            <div className="mt-20 ml-16 mr-16 cursor-pointer">
                <h2 className="mb-4 text-uppercase text-2xl font-semibold tracking-wider">Most Viewed</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {mostMovies.map((item) => (
                        <button onClick={() => handleRouter(item.id)} key={item.id} className="overflow-hidden border rounded-lg relative shadow-md transition-transform duration-300 transform hover:scale-125">
                            <img className="w-full h-48 object-cover" src={item.imgPath} alt={item.title} />
                        </button>
                    ))}
                </div>
            </div>
        </>

    )
}

export default MoviesIndex