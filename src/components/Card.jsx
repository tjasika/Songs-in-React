export const Card = ({title, artist, album, image, onSelect, isSelected}) => {
    
    const handleClick = () => {
        onSelect();
    }

    return (
            <div 
            onClick = {handleClick}
            className={`w-45 h-60 shadow-xl rounded-lg 
                  flex flex-col justify-center items-center
                  transition-transform duration-300 hover:-translate-y-2
                  group relative
                  cursor-pointer
                  ${isSelected ? 'bg-zinc-700' : 'bg-zinc-900 hover:bg-zinc-700'}`}>

                <div className="relative w-40 h-40">
                    {isSelected ? (
                         <svg xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor" 
                            className="absolute inset-0 m-auto w-12 h-12 text-gray-200/80 fill-current 
                                        opacity-0 opacity-100 transition-opacity duration-300 z-10" 
                            viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5m3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5"/>
                        </svg>
                    ): (
                        <svg xmlns="http://www.w3.org/2000/svg" 
                            fill="currentColor" 
                            className="absolute inset-0 m-auto w-12 h-12 text-gray-200/80 fill-current 
                                        opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" 
                            viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
                        </svg>
                    )}
                   

                    <img src={image} className="w-full h-full rounded-sm object-cover z-0"></img>
                </div>
                <div className='w-40 text-gray-200'>
                    <h1 className='font-bold truncate'>{title}</h1>
                    <h3 className='text-sm truncate'>{artist}</h3>
                    <p className='text-sm text-zinc-500 truncate'>{album}</p>
                </div>
                
            </div>
    );
}

