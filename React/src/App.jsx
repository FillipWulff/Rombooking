import './App.css'
import { SanityProvider, useSanityContext } from "./SanityContext";
import { useState, useEffect } from "react";
import Navbar from './navbar';
import Homepage from './pages/homepage';
import Bilde from './bilde';
import Kart from './pages/kart';
import Ledigerom from './pages/rom';
import Omoss from './pages/omoss';
import Kontakt from './pages/kontakt';
import Innlogging from './pages/innlogging';
import GronnBase from "./pages/kartPages/gronnbase.jsx";
function App() {
  let Component
  switch (window.location.pathname) {
    case "/":
      Component = Homepage
      break;
    case "/Kartoversikt":
      Component = Kart
      break;
    case "/LedigeRom":
      Component = Ledigerom
      break;
    case "/OmOss":
      Component = Omoss
      break;
    case "/Kontakt":
      Component = Kontakt
      break;
    case "/Innlogging":
      Component = Innlogging
       break;
     case "/Kartoversikt/GronnBase":
      Component = GronnBase
       break;
  }
  const { client } = useSanityContext();
  const [data, setData] = useState([]);

  const testData = `
    *[ _type == "Rom"]{Navn, RomNr}
    `;

  useEffect(() => {
  
    console.log("Dataclient: ", client.fetch)

    if (client.fetch) {
      client
        .fetch(testData)
        .then((data) => {
          setData(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [client, setData, testData]);

  console.log("Data: ", data[2])

  return (
    <div className="App">
      <SanityProvider>
        <Navbar></Navbar>
        <Component/>
      </SanityProvider>
    </div>
  );
}

export default App
