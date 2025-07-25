export const NowPlaying = ({song}) => {
    if(!song) return null;

    return (
        <div className ="flex flex-col gap-3 h-full items-center text-left w-100 p-2 bg-zinc-900 mt-3 text-gray-200 rounded-lg">
            <h2>Now Playing</h2>
            <img className="w-70 h-70 rounded-lg" src={song.image}></img>
            <div className="song-info w-70 pt-5">
                <p className="text-2xl font-bold">{song.title}</p>
                <p>{song.artist}</p>
                <p>{song.album}</p>
            </div>
            

            {song.audio ? (
                <audio controls autoPlay className="mt-2 w-full">
                    <source src={song.audio} type="audio/mpeg"></source>
                </audio>
            ) : (
                <p>Audio not available.</p>
            )}
        </div>
    )
}