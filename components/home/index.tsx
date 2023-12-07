"use client"
import React from 'react'
import GenresIndex from '../genres';
import MoviesIndex from '../movies';
import LoadingIndex from '../loading';
import { useEffect, useState } from 'react';


function HomePage() {
    const [showLoading, setShowLoading] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowLoading(false);
        }, 2000)
    }, [])

    return (
        <div>
            {showLoading && <LoadingIndex />}

            {!showLoading && (
                <div>
                    <GenresIndex />
                    <MoviesIndex />
                </div>
            )}
        </div>
    )
}

export default HomePage;