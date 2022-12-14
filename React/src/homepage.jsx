import React from "react"
import tegn from "/tegn.svg"

export default function Homepage(){
    return(

        <div id="homepage">
            <p id="stor">Finn ditt rom</p>
            <div id="vanlig">
                <p>Mer enn bare</p>
                <p id="farget">ett tak og fire vegger</p>
            </div>
            <div id="buttons">
                <button class="button-27" role="button">Ledig rom</button>
                <button class="button-27" role="button">Kartoversikt</button>
            </div>
        </div>

    )
}