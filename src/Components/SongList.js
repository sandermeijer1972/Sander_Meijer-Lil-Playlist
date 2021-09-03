import React from "react"
import ListItem from "./ListItem"

function SongList({songs}) {
    const songItems = songs.map(song => <ListItem key={song.id} song={song} />)
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