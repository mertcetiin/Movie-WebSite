import { GenresType, Genres } from "@/data/genres"
import { create } from "zustand"


interface MovieState {
    movieState: GenresType[];
}

export const useMovieStore = create<MovieState>()((set) => ({
    movieState: Genres,
}))