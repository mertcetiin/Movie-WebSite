import Link from 'next/link';
import React from 'react'

function NotFound() {
    return (
        <div className="h-full flex items-center justify-center flex-col">
            <h1 className="text-2xl font-bold mb-4">We couldn&apos;t find the movie you&apos;re looking for!</h1>
            <Link href="/" className="text-gray-800 underline text-lg">Go home</Link>
        </div>

    )
}

export default NotFound;