import React from "react"

function SongChoice({selectedGenre, handleClickGenre, selectedStars, handleClickStars}) {
    return (
        <form className="genre">
            <p>
                Welk genre wil je zien?
            </p>
            <select
                name="genres"
                value={selectedGenre.value}
                onChange={handleClickGenre}
            >
                <option value="all">Alle liedjes</option>
                <option value="Golden oldies">Golden oldies</option>
                <option value="'80's Kneiters">'80's Kneiters</option>
                <option value="No-nonsense Nineties">No-nonsense Nineties</option>
                <option value="21e eeuw">21e eeuw</option>
                <option value="Nederlandstalig">Nederlandstalig</option>
                <option value="Vlaamse vrienden">Vlaamse vrienden</option>
                <option value="Deutsche Schallplatten">Deutsche Schallplatten</option>
                <option value="Hoe fouter hoe beter">Hoe fouter hoe beter</option>
            </select>            
        </form>
    )
}

export default SongChoice
