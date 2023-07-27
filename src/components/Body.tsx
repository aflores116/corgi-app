import React from 'react'
import { useState } from "react";
import Home from "../components/Home";
import Breeders from "../components/Breeders";
import About from "../components/About";
import Contact from "../components/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {useSiteThemeContext} from '../assets/context/SiteThemeContext';



const Body = () => {
    const {state: {darkMode}} = useSiteThemeContext();

  return (
    <main className={`body ${!darkMode ? '' : 'body--dark-theme'}` } id="main" tabIndex={-1}>
        <Routes>
          <Route path="/corgi-app/" element={<Home />} />
          <Route path="/corgi-app/breeders" element={<Breeders />} />
          <Route path="/corgi-app/about" element={<About  />} />
          <Route path="/corgi-app/contact" element={<Contact />} />
        </Routes>
      </main>
  )
}

export default Body