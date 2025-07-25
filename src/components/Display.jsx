import { useState } from 'react';
import songs from '../data/songs.json';
import { CardsContainer } from './CardsContainer';
import { NowPlaying } from './NowPlaying';

export const Display = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const selectedSong = selectedIndex !== null ? songs[selectedIndex] : null;

    return (
        <div className='h-full w-full flex flex-col justify-center items-center'>
            <CardsContainer songs={songs} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
            <NowPlaying song={songs[selectedIndex]}/>
        </div>
        
    )
}