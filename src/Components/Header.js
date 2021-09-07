import React from "react"
import { Link } from "react-router-dom"

function Header() {
    return (
        <div className="header">
            <ul className="links">
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/about">
                    <li>About</li>
                </Link>
            </ul>          
            <h1> Sanders Afspeellijst </h1>            
        </div>
    )
}

export default Header
