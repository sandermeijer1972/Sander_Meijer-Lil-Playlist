import React from "react"
import SongList from "./SongList"
import SongForm from "./SongForm"
import SongDelete from "./SongDelete"
import SongChoice from "./SongChoice"
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
                {id: 7, title: "Hurricane", artist: "Bob Dylan", genre: "Golden oldies", stars: "☆☆"},
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
            sort: "",
            selectedGenre: "all"                 
        }
    }

    render() {
        const capitalizeSong = (str) => {            
            return str.charAt(0).toUpperCase() + str.slice(1)
        }
        const capitalizeArtist = (str) => {
            const words = str.split(" ")
            for (let i=0; i<words.length; i++) {
                words[i] = words[i][0].toUpperCase() + words[i].substr(1)                
            }            
            return words.join(" ")
        }
        const addNewSong = song => {
            const newSong = {
                id: this.state.songs.length + 1,
                title: capitalizeSong(song.title),
                artist: capitalizeArtist(song.artist), 
                genre: song.genre, 
                stars: song.stars
            }
            this.setState({songs: this.state.songs.concat(newSong)})
        }
        const emptySongs = () => {
            this.setState({songs: []})
        }   
        const selectGenre = event => {
            const selectedGenreItem = event.target.value
            console.log(selectedGenreItem)
            switch(selectedGenreItem) {
                case "all":
                    this.setState({selectedGenre: "all"})
                    break
                case "Golden oldies":
                    this.setState({selectedGenre: "Golden oldies"})
                    break
                case "'80's Kneiters":
                    this.setState({selectedGenre: "'80's Kneiters"})
                    break
                case "No-nonsense Nineties":
                    this.setState({selectedGenre: "No-nonsense Nineties"})
                    break
                case "21e eeuw":
                    this.setState({selectedGenre: "21e eeuw"})
                    break
                case "Nederlandstalig":
                    this.setState({selectedGenre: "Nederlandstalig"})
                    break
                case "Vlaamse vrienden":
                    this.setState({selectedGenre: "Vlaamse vrienden"})
                    break
                case "Deutsche Schallplatten":
                    this.setState({selectedGenre: "Deutsche Schallplatten"})
                    break
                case "Hoe fouter hoe beter":
                    this.setState({selectedGenre: "Hoe fouter hoe beter"})
                    break
                default:
                    this.setState({selectedGenre: "all"})
            }
        }        
        const sortSongs = event => {
            const selectedItem = event.target.value
            console.log(selectedItem)
            this.setState({sort: selectedItem})
            switch(selectedItem) {
                case "TAZ":
                    this.setState({songs: this.state.songs.sort((a,b) => (a.title > b.title) ? 1 : -1)})
                    break
                case "TZA":
                    this.setState({songs: this.state.songs.sort((a,b) => (a.title > b.title) ? -1 : 1)})
                    break
                case "AAZ":
                    this.setState({songs: this.state.songs.sort((a,b) => (a.artist > b.artist ) ? 1 : -1)})
                    break
                case "AZA":
                    this.setState({songs: this.state.songs.sort((a,b) => (a.artist > b.artist ) ? -1 : 1)})
                    break
                case "SHL":
                    this.setState({songs: this.state.songs.sort((a,b) => (a.stars.length > b.stars.length ) ? -1 : 1)})
                    break
                case "SLH":
                    this.setState({songs: this.state.songs.sort((a,b) => (a.stars.length > b.stars.length ) ? 1 : -1)})
                    break
                default:
                    this.setState({songs: this.state.songs.sort((a,b) => (a.id > b.id) ? 1 : -1)})
                   
            }
        }
        return (
            <div className="overview">
                <SongList songs={this.state.songs} selectedGenre={this.state.selectedGenre} />
                <SongForm onSubmit={addNewSong}/>
                <SongDelete songs={this.state.songs} handleClickDeleteSongs={emptySongs} />
                <SongChoice selectedGenre={this.state.selectedGenre} handleClickGenre={selectGenre} />               
                <SongSort sortering={this.state.sort} handleClickSort={sortSongs} />
            </div>
        )
    }

}

export default SongOverview
