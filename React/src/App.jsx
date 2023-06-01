import './App.css'
import { useState, useEffect } from "react";
import Navbar from './navbar';
import Homepage from './pages/homepage';
import Kart from './pages/kart';
import Ledigerom from './pages/rom';
import Omoss from './pages/omoss';
import Kontakt from './pages/kontakt';
import Innlogging from './pages/innlogging';
import GronnBase from "./pages/kartPages/gronnbase.jsx";
import BlogList from './components/list';
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
      Component = BlogList
      break;
    case "/Innlogging":
      Component = Innlogging
       break;
     case "/Kartoversikt/GronnBase":
      Component = GronnBase
       break;
  }

  return (
    <div className="App">
        <Navbar></Navbar>
        <Component/>
    </div>
  );
}

export default App
