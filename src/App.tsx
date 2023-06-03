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

function App() {
  const [count, setCount] = useState(0);
  const [showImages, setShowImages] = useState();

  return (
    <>
      <SiteHeader tagline={"Let's Talk Corgis"} />
      {/* <BackgroundVideoHero
        videoDescription={"A corgi walking down the beach. The video has no audio."}
        title={"Let's talk about Corgis"}
        creditsUrl={"https://www.vecteezy.com/video/4192384-funny-corgi-dog-near-the-sea"}
        creditsText={"Funny corgi dog near the sea Stock Videos by Vecteezy"}
        /> */}
      <main className="body" id="main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home isPageTitle={true} />} />
          <Route path="/breeders" element={<Breeders isPageTitle={false} />} />
          <Route path="/about" element={<About isPageTitle={false} />} />
        </Routes>
      </main>
      <SiteFooter />
    </>
  );
}

export default App;
