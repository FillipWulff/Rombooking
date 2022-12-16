import React from "react"

export default function Navbar (){
    return(
        <div id="header">
            <a href="/"id="tittel">bookmeariver.</a>
            <div id="valg">
                <a href="/Kartoversikt">Kartoversikt</a>
                <a href="/LedigeRom">Ledig rom</a>
                <a href="/OmOss">Om oss</a>
                <a href="/Kontakt">Kontakt</a>
                <a href="/Innlogging"id="innlogging">Logg inn</a>
            </div>
        </div>
    )

}