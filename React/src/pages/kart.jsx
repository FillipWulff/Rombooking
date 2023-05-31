import React from "react"

export default function Kart(){
    return(
    <div id="kartoversikt">
    <div class="grid-container">
        {/* KNAPPER FOR FORSKJELLIGE ROM: KNAPPENE LEDER TIL EN ANNEN PATH SOM SKAL VISE ROM INFO
        KNAPP NR 1: GRØNN BASE */}
        <a href="Kartoversikt/GronnBase"class="KartInfo" id="boks1">
            <h2>GRØNN BASE</h2>
            <img id="placeholder1"src="src/img/buildingp.jpeg" alt="" />

        </a>
        {/* KNAPP NR 2: ORANSJE BASE */}
        <a href="Kartoversikt/OransjeBase"class="KartInfo" id="boks2">            
            <h2>ORANSJE BASE</h2>
            <img id="placeholder1"src="src/img/buildingp.jpeg" alt="" />
        </a>
        {/* KNAPP NR 3: LILLA BASE */}
        <a href="Kartoversikt/LillaBase"class="KartInfo" id="boks3">            
            <h2>LILLA BASE</h2>
            <img id="placeholder1"src="src/img/buildingp.jpeg" alt="" />
        </a>            
        {/* KNAPP NR 4: BLÅ BASE */}
        <a href="Kartoversikt/BlåBase"class="KartInfo" id="boks4">            
            <h2>BLÅ BASE</h2>
            <img id="placeholder1"src="src/img/buildingp.jpeg" alt="" />
        </a>
        {/* KNAPP NR 5: ESPORT*/}
        <a href="Kartoversikt/E-sport"class="KartInfo" id="boks5">
            <h2>ESPORT</h2>
            <img id="placeholder1"src="src/img/buildingp.jpeg" alt="" />
        </a>
        {/* KNAPP NR 6: PROFF ROM */}
        <a href="Kartoversikt/ProffRom"class="KartInfo" id="boks6">
            <h2>PROFF ROMMET</h2>
            <img id="placeholder1"src="src/img/buildingp.jpeg" alt="" />    
        </a>
        {/* KNAPP NR 7: Ø-251 */}
        <a href="Kartoversikt/Ø-251"class="KartInfo" id="boks7">
            <h2>Ø-251</h2>
            <img id="placeholder1"src="src/img/buildingp.jpeg" alt="" /> 
        </a>
        {/* KNAPP NR 8: GREEN SCREEN */}
        <a href="Kartoversikt/GreenScreen"class="KartInfo" id="boks8">
            <h2>GREEN SCREEN</h2>
            <img id="placeholder1"src="src/img/buildingp.jpeg" alt="" /> 
        </a>
        {/* KNAPP NR 9: IT-LAB */}
        <a href="Kartoversikt/IT-Laben"class="KartInfo" id="boks9">
            <h2>IT LABEN</h2>
            <img id="placeholder1"src="src/img/buildingp.jpeg" alt="" /> 
        </a>
        {/* KNAPP NR 10: LILLE AUDI */}
        <a href="Kartoversikt/LilleAudi"class="KartInfo" id="boks0">
            <h2>LILLE AUDI</h2>
            <img id="placeholder1"src="src/img/buildingp.jpeg" alt="" /> 
        </a>

    </div>

    <img id="KartBilde" src="src/img/kartim.png"></img>
</div>

)
}
