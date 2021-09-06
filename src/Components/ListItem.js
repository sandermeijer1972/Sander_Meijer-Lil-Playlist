import React from "react"

function ListItem({song, genre}) {
    return (
        <li style={{display: (genre !== song.genre && genre !== "all") && "none" }}>
            <p>{song.title}</p>
            <p>{song.artist}</p>
            <p>{song.genre}</p>
            <p>{song.stars}</p>
        </li>
    )
}

export default ListItem
