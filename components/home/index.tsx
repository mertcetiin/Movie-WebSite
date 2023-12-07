import React from 'react'
import GenresIndex from '../genres';
import MoviesIndex from '../movies';

function HomePage() {

    return (
        <div>
            <GenresIndex />
            <MoviesIndex />
        </div>
    )
}

export default HomePage;