import React from "react"
import Header from "./Components/Header"
import SongOverview from "./Components/SongOverview"
import About from "./Components/About"
import Footer from "./Components/Footer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
    return (
        <Router>
            <div className="body">
                <Header />
                <Switch>
                    <Route path="/" exact component={SongOverview} />
                    <Route path="/about" component={About} />
                </Switch>         
                <Footer />
            </div>
        </Router>
    )
}

export default App