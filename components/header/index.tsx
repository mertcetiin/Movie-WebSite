"use client";
import Link from 'next/link';
import React from 'react'
import { FaPlay } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { useState } from 'react';

function Header() {

    const [inputCustom, setInputCustom] = useState(false);

    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                    <FaPlay />
                    <button className="ml-3 text-xl hover:text-gray-400">Movies</button>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    {inputCustom ?
                        <div className='flex items-center'>
                            <input className='mr-4 px-2 py-1 w-22 rounded-xl outline-none bg-gray-700 text-white' type="search" placeholder="Search..." />
                            <button onClick={() => setInputCustom(!inputCustom)} className='mr-5'><FaSearch /></button>
                        </div>
                        : <button className='mr-5' onClick={() => setInputCustom(!inputCustom)}><FaSearch /></button>}

                    <Link href='/' className="mr-5 text-white hover:text-gray-400">Movies</Link>
                    <Link href='/' className="mr-5 text-white hover:text-gray-400">Series</Link>
                </nav>
                <button className="inline-flex items-center text-white bg-gray-700 border-0 py-1 px-3 focus:outline-none hover:bg-gray-800 rounded text-base mt-4 md:mt-0">
                    <IoPersonSharp />
                </button>
            </div>
        </header>
    )
}

export default Header;