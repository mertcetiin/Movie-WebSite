"use client"
import GenresIndex from '@/components/genres';
import LoadingIndex from '@/components/loading';
import MoviesIndex from '@/components/movies';
import React from 'react'
import { useEffect, useState } from 'react';

function HomeIndex() {

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

export default HomeIndex;