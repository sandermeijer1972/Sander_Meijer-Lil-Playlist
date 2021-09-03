import React from "react"

function SongDelete({songs, handleClickDeleteSongs}) {
    return (
        <div className="leegmaken" style={{display: songs.length === 0 && "none"}}>
            <button onClick={handleClickDeleteSongs}>maak de lijst leeg</button>
        </div>
    )
}

export default SongDelete
