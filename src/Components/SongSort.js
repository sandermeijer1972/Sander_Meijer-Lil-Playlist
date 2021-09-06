import React from "react"

function SongSort({sortering, handleClickSort}) {
    return (
        <form className="sortering">
            <p>
                Hoe moeten de liedjes gesorteerd worden?
            </p>
            <select
                name="sortering"
                value={sortering.value}
                onChange={handleClickSort}
            >
                <option value="">-- kies sortering --</option>
                <option value="TAZ">titel a-z</option>
                <option value="TZA">titel z-a</option>
                <option value="AAZ">artiest a-z</option>
                <option value="AZA">artiest z-a</option>
                <option value="SHL">sterren 5-1</option>
                <option value="SLH">sterren 1-5</option>
            </select>
        </form>
    )
}

export default SongSort
