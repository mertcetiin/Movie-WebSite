import { GenresType, Genres } from "@/data/genres"
import { Movies, MoviesType } from "@/data/movies";
import { create } from "zustand"


interface MovieState {
    genresState: GenresType[];
    moviesState: MoviesType[];
}

export const useMovieStore = create<MovieState>()((set) => ({
    genresState: Genres,
    moviesState: Movies,
}))