import React, { createContext, useState, useContext, useEffect } from "react";
import sanityClient from "@sanity/client";

const initialState = { client: {} };

const SanityContext = createContext(initialState);

export const SanityProvider = (props) => {
  const { children } = props;
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const client = sanityClient({
      projectId: "yy8vrjcm",
      dataset: "production",
      apiVersion: "2021-09-22", // uses current UTC date - see "specifying API version"!
      token:
        "skZhNKVaBckgGnfTq2jvUcxpr0ldpZ9VyOYYcTnfpHc9hHUWjvEnL8hSbdVlXGZO4GYNvgI8jbRERYD2VIPsep5h5259aasIVCSvroNaCWRqHkNnpShN4YazgVuzLZzRy90RlFlb1BmBQK7kQrIBWy9Op302yfOdk2McU4GQfY43bzAp8jOY",
      useCdn: true, // `false` if you want to ensure fresh data
    });

    console.log("Client: ", client)

    setState((prevState) => ({ ...prevState, client }));
  }, []);

console.log(state)


  return (
    <SanityContext.Provider value={state}>{children}</SanityContext.Provider>
  );
};


export const useSanityContext = () => {
  const context = useContext(SanityContext);

  return context;
};