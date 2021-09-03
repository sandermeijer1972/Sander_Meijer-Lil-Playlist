import React from "react"
import SongList from "./SongList"
import SongForm from "./SongForm"
import SongDelete from "./SongDelete"
import SongSort from "./SongSort"

class SongOverview extends React.Component {
    
    constructor() {
        super()
        this.state = {
            songs: [
                {id: 1, title: "Over de Muur", artist: "Klein Orkest", genre: "Nederlandstalig", stars: "☆☆☆☆☆"},
                {id: 2, title: "I still haven't found what I'm looking for", artist: "Badesalz", genre: "Hoe fouter hoe beter", stars: "☆☆☆☆"},
                {id: 3, title: "Lovesong 100.001", artist: "De Dijk", genre: "Nederlandstalig", stars: "☆☆☆"},
                {id: 4, title: "Rumours", artist: "Timex Social Club", genre: "'80's Kneiters", stars: "☆☆☆☆☆"},
                {id: 5, title: "Codo", artist: "Döf", genre: "Deutsche Schallplatten", stars: "☆☆☆"},
                {id: 6, title: "Speeltijd", artist: "Niels Destadsbader", genre: "Vlaamse vrienden", stars: "☆☆☆☆"},
                {id: 7, title: "Shame and scandal in the family", artist: "Shawn Elliott", genre: "Golden oldies", stars: "☆☆"},
                {id: 8, title: "Need you now", artist: "Lady Antebellum", genre: "21e eeuw", stars: "☆☆☆☆"},
                {id: 9, title: "Where the wild roses grow", artist: "Nick Cave & Kylie Minogue", genre: "No-nonsense Nineties", stars: "☆"},
                {id: 10, title: "Stirb nicht vor mir", artist: "Rammstein & Sharleen Spitari", genre: "Deutsche Schallplatten", stars: "☆☆"},
                {id: 11, title: "Save your love", artist: "Renee & Renato", genre: "Hoe fouter hoe beter", stars: "☆☆☆☆"},
                {id: 12, title: "Tears run rings", artist: "Marc Almond", genre: "'80's Kneiters", stars: "☆☆☆☆☆"},
                {id: 13, title: "Yesterday", artist: "Beatles", genre: "Golden oldies", stars: "☆☆☆☆☆"},
                {id: 14, title: "Rollercoaster", artist: "Danny Vera", genre: "21e eeuw", stars: "☆☆☆"},
                {id: 15, title: "Allein allein", artist: "Polarkreis 18", genre: "Deutsche Schallplatten", stars: "☆☆"},
                {id: 16, title: "Domino", artist: "Clouseau", genre: "Vlaamse vrienden", stars: "☆"},
                {id: 17, title: "I got 5 on it", artist: "Luniz", genre: "No-nonsense Nineties", stars: "☆☆☆"},
                {id: 18, title: "Dodenrit", artist: "Drs.P", genre: "Nederlandstalig", stars: "☆☆☆☆☆"}
            ],
            sort: ""
        }
    }

    render() {
        const capitalize = (str) => {            
            return str.charAt(0).toUpperCase() + str.slice(1)
        }
        const addNewSong = song => {
            const newSong = {
                id: this.state.songs.length + 1,
                title: capitalize(song.title),
                artist: capitalize(song.artist), 
                genre: song.genre, 
                stars: song.stars
            }
            this.setState({songs: this.state.songs.concat(newSong)})
        }
        const emptySongs = () => {
            this.setState({songs: []})
        }
        const sortSongs = () => {
            switch(this.state.sort) {
                case "TAZ":
                    return this.setState({songs: this.state.songs.sort((a,b) => (a.title > b.title) ? 1 : -1)})
                    break
                case "TZA":
                    return this.setState({songs: this.state.songs.sort((a,b) => (a.title > b.title) ? -1 : 1)})
                    break
                case "AAZ":
                    return this.setState({songs: this.state.songs.sort((a,b) => (a.artist > b.artist ) ? 1 : -1)})
                    break
                case "AZA":
                    return this.setState({songs: this.state.songs.sort((a,b) => (a.artist > b.artist ) ? -1 : 1)})
                    break
                case "SHL":
                    return this.setState({songs: this.state.songs.sort((a,b) => (a.stars.length > b.stars.length ) ? 1 : -1)})
                    break
                case "SLH":
                    return this.setState({songs: this.state.songs.sort((a,b) => (a.stars.length > b.stars.length ) ? -1 : 1)})
                    break
                default:
                    return this.setState({songs: this.state.songs})
            }
        }
        return (
            <div className="overview">
                <SongList songs={this.state.songs} />
                <SongForm onSubmit={addNewSong}/>
                <SongDelete songs={this.state.songs} handleClickDeleteSongs={emptySongs} />
                <SongSort sortering={this.state.sort} handleClickSort={sortSongs} />
            </div>
        )
    }

}

export default SongOverview
