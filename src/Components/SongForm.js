import React from "react"

class SongForm extends React.Component {
    constructor() {
        super()
        this.state = {            
            title: "",
            artist: "",
            genre: "",
            stars: ""            
        }
    }
    render() {
        const onTitleInput = event => {
            this.setState({
                title: event.target.value
            })
        }
        const onArtistInput = event => {
            this.setState({
                artist: event.target.value
            })
        }
        const onGenreInput = event => {
            this.setState({
                genre: event.target.value
            })
        }
        const onStarsInput = event => {
            this.setState({
                stars: event.target.value
            })
        }
        const onSubmit = event => {
            event.preventDefault()
            if(this.state.title.length > 0 && this.state.artist.length > 0 && this.state.genre.length > 0 && this.state.stars.length > 0) {
                this.props.onSubmit({
                    title: this.state.title,
                    artist: this.state.artist,
                    genre: this.state.genre,
                    stars: this.state.stars
                })
                this.setState({
                    title: "",
                    artist: "",
                    genre: "",
                    stars: ""
                })           
            } else {
                alert("Als je niet alle velden invult, wordt er geen nieuw nummer toegevoegd aan de afspeellijst! Graag een titel, artiest, het genre en een waardering meegeven!")
            }         
        }
        return (
            <form className="invoer" onSubmit={onSubmit}>
                <input
                    placeholder="Titel"
                    type="text"
                    onChange={onTitleInput}
                    value={this.state.title}
                ></input>
                <input
                    placeholder="Artiest"
                    type="text"
                    onChange={onArtistInput}
                    value={this.state.artist}
                ></input>
                <select
                    name="genre"
                    value={this.state.genre}
                    onChange={onGenreInput}
                >
                    <option value="">-- kies het genre --</option>
                    <option value="Golden oldies">Golden oldies</option>
                    <option value="'80's Kneiters">'80's Kneiters</option>
                    <option value="No-nonsense Nineties">No-nonsense Nineties</option>
                    <option value="21e eeuw">21e eeuw</option>
                    <option value="Nederlandstalig">Nederlandstalig</option>
                    <option value="Vlaamse vrienden">Vlaamse vrienden</option>
                    <option value="Deutsche Schallplatten">Deutsche Schallplatten</option>
                    <option value="Hoe fouter hoe beter">Hoe fouter hoe beter</option>
                </select>
                <select
                    name="stars"
                    value={this.state.stars}
                    onChange={onStarsInput}
                >
                    <option value="">-- geef een waardering --</option>
                    <option value="☆">☆</option>
                    <option value="☆☆">☆☆</option>
                    <option value="☆☆☆">☆☆☆</option>
                    <option value="☆☆☆☆">☆☆☆☆</option>
                    <option value="☆☆☆☆☆">☆☆☆☆☆</option>
                </select>
                <button type="submit">voeg nieuw nummer toe</button>
            </form>
        )
    }
}

export default SongForm
