import { useState } from 'react'

export const Card = ({title, artist, album, image}) => {
    return (
        <>
            <div className="bg-zinc-900 w-50 h-70 shadow-xl rounded-lg 
                            flex flex-col justify-center items-center
                            hover:cursor-pointer hover:bg-zinc-700 
                            transition-transform duration-300 hover:-translate-y-2
                            group relative">
                
                <div className="relative w-45 h-45">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                        fill="currentColor" 
                        className="absolute inset-0 m-auto w-12 h-12 text-gray-200/80 fill-current 
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" 
                        viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
                    </svg>

                    <img src={image} className="w-full h-full rounded-sm object-cover z-0"></img>
                </div>
                <div className='w-45 text-gray-200 pt-2'>
                    <h1 className='font-bold text-lg truncate'>{title}</h1>
                    <h3 className='text-sm truncate'>{artist}</h3>
                    <p className='text-sm text-zinc-500 truncate'>{album}</p>
                </div>
                
            </div>
        </>
    );
}

