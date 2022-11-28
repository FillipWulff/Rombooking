import './App.css'
import { SanityProvider, useSanityContext } from "./SanityContext";
import { useState, useEffect } from "react";

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

      </SanityProvider>
    </div>
  );
}

export default App
