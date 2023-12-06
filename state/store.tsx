import { Action, ActionType } from "@/data/action";
import { GenresType, Genres } from "@/data/genres"
import { Movies, MoviesType } from "@/data/movies";
import { create } from "zustand"


interface MovieState {
    genresState: GenresType[];
    moviesState: MoviesType[];
    actionState: ActionType[];
    movieId: number | null;
}

export const useMovieStore = create<MovieState>()((set) => ({
    genresState: Genres,
    moviesState: Movies,
    actionState: Action,
    movieId: null,

    setMovieId: (id: number) => set({ movieId: id }),
}))