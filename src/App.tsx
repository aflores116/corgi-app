import React, { useEffect } from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./Style.css";
import SiteHeader from "./components/SiteHeader";
import Home from "./components/Home";
import Breeders from "./components/Breeders";
import About from "./components/About";
import SiteNavigation from "./components/SiteNavigation";
import SiteLogo from "./components/SiteLogo";
import BackgroundVideoHero from "./components/BackgroundVideoHero";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SiteFooter from "./components/SiteFooter";
import Contact from "./components/Contact";

function App() {
  const [count, setCount] = useState(0);
  const [showImages, setShowImages] = useState();

  return (
    <>
      <SiteHeader tagline={"Let's Talk Corgis"} />
      <main className="body" id="main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/breeders" element={<Breeders />} />
          <Route path="/about" element={<About  />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <SiteFooter />
    </>
  );
}

export default App;
