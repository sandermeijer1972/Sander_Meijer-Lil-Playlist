import React from "react"
import trommel from "../images/trommel.jpg"
import steeldrum from "../images/steeldrum.jpg"

function About() {
    return (
        <div className="about">
            <h2>Sander & Muziek</h2>
            <p>
                "Music was my first love" is zeker wel op mij van toepassing. Een dag zonder muziek is een dag niet geleefd. Ik 
                moet altijd muziek op hebben staan, behalve tijdens de filmpjes die ik bekijk voor de opleiding.
            </p>
            <p>
                Als jochie van 10 ben ik bij de drumband gegaan, en heb zo'n 30 jaar getrommeld. Door het flink dalende
                leden-aantal werd de drumband opgeheven, en zijn we verder gegaan als steelband, waarin ik in eerste instantie 
                de bas speelde (6 olievaten) en nu ook bezig ben om de lead-pan te leren spelen. Ook geef ik onze leerlingen les.
            </p>
            <div className="fotos">
                <img src={trommel} alt=""></img>
                <img src={steeldrum} alt=""></img>
            </div>
            <p>
                Ik hou verder van heel veel verschillende muziek. Ik heb jaren lang alle nummer 1 hits van de Top 40 verzameld, 
                maar doordat alles tegenwoordig gedownload en gestreamd wordt, is dat nu niet meer echt bijzonder om bij te 
                houden. Mijn voorkeur gaat wel uit naar jaren '80 muziek, dat zal de leeftijd wel zijn. En verder kan ik het 
                meeste wel waarderen. Mocht je ooit eens op zoek zijn naar een liedje, maar weet je titel of artiest niet, vraag 
                het mij gerust. 
            </p>
            <p>
                Deze opdracht was dan ook helemaal op mijn lijf geschreven! Ik moet ook eerlijk toegeven: het bepalen van de 
                playlist heeft bijna net zoveel tijd gekost als het schrijven van de code. Ik wilde in eerste instantie de 
                opdracht maken met redux, maar dat begrijp ik nu toch nog net niet goed genoeg, dus het is "gewoon" react 
                geworden. Vooral het filteren was hier ook nog ietsjes te hoog gegrepen, maar daar wil ik me in de toekomst nog 
                wel verder in verdiepen.
            </p>
            <p>
                En voor de nieuwsgierigen: zoek gerust de nummers in mijn playlist eens op! En het aantal sterren in de playlist...
                die horen bij deze nummers allemaal ☆☆☆☆☆ te zijn, maar dat was voor de opdracht niet zo handig.
            </p>
        </div>
    )
}

export default About 
