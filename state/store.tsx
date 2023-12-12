import { Action, ActionType } from "@/data/action";
import { GenresType, Genres } from "@/data/genres"
import { create } from "zustand"


interface Movie {
    id: number;
    title: string;
    backdrop_path: string;
    overview: string;
    poster_path: string;
}

interface MovieStore {
    trendingMovies: Movie[];
    setTrendingMovies: (movies: Movie[]) => void;
    genresState: GenresType[];
    actionState: ActionType[];
    movieId: number | null;

}

export const useMovieStore = create<MovieStore>()((set) => ({
    genresState: Genres,
    trendingMovies: [],
    setTrendingMovies: (movies) => set({ trendingMovies: movies }),
    actionState: Action,
    movieId: null,

    setMovieId: (id: number) => set({ movieId: id }),
}))