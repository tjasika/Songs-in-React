import { useState } from 'react'

export const Card = ({title, artist, album, image}) => {
    return (
        <>
            <div className="bg-zinc-900 w-50 h-70 shadow-xl rounded-lg flex flex-col justify-center items-center">
                <img src={image} className="w-45 h-45 rounded-sm"></img>
                <div className='w-45 text-gray-200 pt-2'>
                    <h1 className='font-bold text-lg truncate'>{title}</h1>
                    <h3 className='text-sm truncate'>{artist}</h3>
                    <p className='text-sm text-zinc-500 truncate'>{album}</p>
                </div>
                
            </div>
        </>
    );
}

