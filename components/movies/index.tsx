"use client";
import FavoriIndex from '../favoriMovies';
import MostIndex from '../mostMovies';
import PopularIndex from '../popularMovies';


function MoviesIndex() {

    return (
        <>
            <FavoriIndex label={'Favori Movies'} />
            <PopularIndex label={'Popular Movies'} />
            <MostIndex label={'Most Viewed'} />
        </>

    )
}

export default MoviesIndex;