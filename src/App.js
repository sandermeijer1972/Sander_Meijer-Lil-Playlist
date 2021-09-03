import React from "react"
import Header from "./Components/Header"
import SongOverview from "./Components/SongOverview"
import Footer from "./Components/Footer"

function App() {
    return (
        <div className="body">
            <Header />
            <SongOverview />           
            <Footer />
        </div>
    )
}

export default App