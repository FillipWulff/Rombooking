import './App.css'
import { SanityProvider, useSanityContext } from "./SanityContext";
import { useState, useEffect } from "react";
import Navbar from './navbar';
import Homepage from './homepage';
import Bilde from './bilde';

function App() {
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
        <Homepage></Homepage>
        <Bilde></Bilde>
      </SanityProvider>
    </div>
  );
}

export default App
