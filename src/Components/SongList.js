import React from "react"
import ListItem from "./ListItem"

function SongList({songs, selectedGenre}) {
    const songItems = songs.map(song => <ListItem key={song.id} song={song} genre={selectedGenre} />)
    return (
        <ul className="songs">
            <li>
                <p>Titel</p>
                <p>Artiest</p>
                <p>Genre</p>
                <p>Sterren</p>
            </li>
            {songItems}
        </ul>
    )
}


export default SongList