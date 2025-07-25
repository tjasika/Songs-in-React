export const NowPlaying = ({song}) => {
    if(!song) return null;

    return (
        <div className ="flex flex-col h-50 w-full">
            <h2>Now Playing</h2>
            <p>{song.title}</p>
            <p>{song.artist}</p>
            <p>{song.album}</p>

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