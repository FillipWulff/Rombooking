import React, { useState, useEffect } from "react";
import sanityClient from "../sanity"; 

const BlogList = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    // kjører en "fetch" funskjon med en GROQ query for å få alle
    sanityClient
      .fetch(`*[_type == "Rom"]{Navn, Base, Ledighet,RomNr}`)
      .then((data) => {
        setPosts(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div>
      {posts
        ? posts.map((Rom) => (
            <div key={Rom.RomNr.current}>
              <h2>{Rom.Navn}</h2>
              <p>{Rom.Base}</p>
            </div>
          ))
        : "Loading..."}
    </div>
  );
};

export default BlogList;