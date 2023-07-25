import React, { useEffect } from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./Style.css";
import SiteHeader from "./components/SiteHeader";
import Home from "./components/Home";
import Breeders from "./components/Breeders";
import About from "./components/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SiteFooter from "./components/SiteFooter";
import Contact from "./components/Contact";
import SiteThemeContext from "./assets/context/SiteThemeContext";
import useSiteTheme from "./assets/context/useSiteThemeContext";
import {useSiteThemeContext} from './assets/context/SiteThemeContext';


function App() {
  const [count, setCount] = useState(0);
  const [showImages, setShowImages] = useState();
  //context
const {state: {darkMode}} = useSiteThemeContext();

  return (
    <>
      <SiteThemeContext.Provider value={useSiteTheme()}>
      <SiteHeader tagline={"Let's Talk Corgis"} />
      <main className={`body ${!darkMode ? null : 'body--dark-theme'}` } id="main" tabIndex={-1}>
        <Routes>
          <Route path="/corgi-app/" element={<Home />} />
          <Route path="/corgi-app/breeders" element={<Breeders />} />
          <Route path="/corgi-app/about" element={<About  />} />
          <Route path="/corgi-app/contact" element={<Contact />} />
        </Routes>
      </main>
      <SiteFooter />
      </SiteThemeContext.Provider>
    </>
  );
}

export default App;
