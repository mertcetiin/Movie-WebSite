"use client";
import { useMovieStore } from '@/state/store';
import Link from 'next/link';
import React from 'react';

function GenresIndex() {

    const genresState = useMovieStore((state) => state.genresState)


    return (
        <div className="container mx-auto mt-8 flex items-center justify-center">
            <div className='flex flex-wrap gap-4'>
                {genresState.map((item) => (
                    <Link href={item.linkGenres} key={item.id} className="bg-gray-800 p-4 rounded-lg text-white hover:bg-gray-900">
                        <p>{item.name}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default GenresIndex;