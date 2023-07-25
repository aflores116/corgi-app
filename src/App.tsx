import React, { useEffect } from "react";
import { useState } from "react";
import "./Style.css";
import SiteHeader from "./components/SiteHeader";
import SiteThemeContext from "./assets/context/SiteThemeContext";
import useSiteTheme from "./assets/context/useSiteThemeContext";
import {useSiteThemeContext} from './assets/context/SiteThemeContext';
import SiteFooter from "./components/SiteFooter";
import Body from "./components/Body";


function App() {
  const [count, setCount] = useState(0);
  const [showImages, setShowImages] = useState();

  return (
    <>
      <SiteThemeContext.Provider value={useSiteTheme()}>
        <SiteHeader tagline={"Let's Talk Corgis"} />
        <Body />
        <SiteFooter />
      </SiteThemeContext.Provider>
    </>
  );
}

export default App;
