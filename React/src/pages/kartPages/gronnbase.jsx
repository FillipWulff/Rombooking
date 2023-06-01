import React, {useState, useEffect} from "react"
import sanityClient from "/src/sanity.jsx";

const GronnBase = () => {
    const [gBase, setGBase] = useState(null);

    useEffect(() => {
        // kjører en "fetch" funskjon med en GROQ query for rommet "gronn base".
        sanityClient
          .fetch(`*[_type =="Rom" && Navn=="Grønn Base"]{Navn, Base, RomNr,Ledighet, Kapasitet,Skjerm, Utstyr, Nokkelpers}`)
          .then((data) => {
            setGBase(data);
          })
          .catch(console.error);
      }, []);
    
      return (
        <div>
          {gBase
            ? gBase.map((Rom) => ( //sjekker om gBase finnes, og etter det kjører en for løkke for alle rommene.
                <div>
                  <h2>{Rom.Navn}</h2>
                  <p>Base: {Rom.Base}</p>
                  <p>RomNr: {Rom.RomNr}</p>
                  <p>Ledighet: {Rom.Ledighet}</p>
                  <p>Kapasitet: {Rom.Kapasitet}</p>
                  <p>Skjerm: {Rom.Skjerm}</p>
                  <p>Utstyr: {Rom.Utstyr}</p>
                  <p>Nøkkelpers: {Rom.Nokkelpers}</p>
        {/* her printes alle de forskjellige datapoints som trengs */}

                </div>
              ))
            : "Loading..."}
        </div>
      );
    };

export default GronnBase;
