import {Card} from './Card'

export const CardsContainer = ({songs, selectedIndex, setSelectedIndex}) => {
    const handleSelect = (isSelected, index) => {
        if(isSelected) {
            setSelectedIndex(null);
        } else {
            setSelectedIndex(index);
        }
    }

    return (
        <div className="w-300 h-full grid grid-rows-2 grid-cols-5 gap-5">
            {songs.map((song, index)=> (
                <Card 
                    key={index} 
                    title={song.title} 
                    artist={song.artist} 
                    album ={song.album}
                    image={song.image}
                    isSelected={selectedIndex === index}
                    onSelect={()=>{handleSelect(selectedIndex === index,index)}}
                />
            ))}
        </div>
    )
}