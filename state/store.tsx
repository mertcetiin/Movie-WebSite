import { Action, ActionType } from "@/data/action";
import { GenresType, Genres } from "@/data/genres"
import { Movies, MoviesType } from "@/data/movies";
import { create } from "zustand"


interface MovieState {
    genresState: GenresType[];
    moviesState: MoviesType[];
    actionState: ActionType[];
}

export const useMovieStore = create<MovieState>()((set) => ({
    genresState: Genres,
    moviesState: Movies,
    actionState: Action,
}))