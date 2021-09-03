import React from "react"

function ListItem({song}) {
    return (
        <li>
            <p>{song.title}</p>
            <p>{song.artist}</p>
            <p>{song.genre}</p>
            <p>{song.stars}</p>
        </li>
    )
}

export default ListItem
