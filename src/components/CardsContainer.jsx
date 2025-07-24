import songs from '../data/songs.json';
import {Card} from './Card'

export const CardsContainer = () => {
    return (
        <div className="w-full h-full grid grid-rows-2 grid-cols-5">
            {songs.map((song, index)=> (
                <Card 
                    key={index} 
                    title={song.title} 
                    artist={song.artist} 
                    album ={song.album}
                    image={song.image}
                />
            ))}
        </div>
    )
}