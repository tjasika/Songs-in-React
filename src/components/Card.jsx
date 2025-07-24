import { useState } from 'react'

export const Card = ({title, artist, album, image}) => {
    return (
        <>
            <div className="bg-zinc-900 w-50 h-70 shadow-xl rounded-lg flex flex-col justify-center items-center">
                <img src={image} className="w-45 h-45"></img>
                <div className='w-45 text-white'>
                    <h1 className='text-bold truncate'>{title}</h1>
                    <h3 className='text-medium truncate'>{artist}</h3>
                    <p className='text-bold truncate'>{album}</p>
                </div>
                
            </div>
        </>
    );
}

