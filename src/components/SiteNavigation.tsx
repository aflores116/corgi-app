import React, {useState, useEffect} from 'react'
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import App from '../App';
import SiteBody from './SiteBody';
import SiteHeader from './SiteHeader';

interface Props {
  handleLogoMarkup?:() => any;
}


const SiteNavigation = ({handleLogoMarkup, } : Props) => {


const [navTriggerActive, setNavTriggerActive] = useState<boolean>(false);



useEffect(() =>  {
}, [navTriggerActive]);

const handleNavButton = function(){
  if(navTriggerActive == false){
    setNavTriggerActive(true);
  }else{
    setNavTriggerActive(false);
  }
}





  return (
    <nav className="site-header-nav" role="navigation">
      <button 
        className={!navTriggerActive ? "site-header-nav__trigger" : "site-header-nav__trigger site-header-nav__trigger--active"} 
        aria-expanded={!navTriggerActive ? false : true}
        type="button"
        onClick={() => handleNavButton?.()}
      >
        <span className="visually-hidden">navigation trigger</span>
        <span className="site-header-nav__trigger-dash"></span>
      </button>
      <span className="focusable" tabIndex={0}>
       Navigation Instructions: Press tab to navigate to the next menu item, and hit enter to go to that page.
      </span>
      <ul className={!navTriggerActive ? "site-nav-listing" : "site-nav-listing site-nav-listing--active"}>
        <li className="site-nav-listing__item">
          <Link 
                className="site-nav-listing__item-link"
                to="/breeders">
            Breeders
          </Link>
        </li>
        <li className="site-nav-listing__item">
        <Link className="site-nav-listing__item-link"
          to="/about"
        >
          About Corgis
          </Link>
        </li>
        <li className="site-nav-listing__item">
        <Link className="site-nav-listing__item-link"
          to="/Contact"
        >
          Contact
          </Link>
        </li>
      </ul>
  </nav>

  )
}

export default SiteNavigation;
