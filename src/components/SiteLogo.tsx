import React from 'react'
import { Link } from "react-router-dom";
import SiteNavigation from './SiteNavigation';
import ltacLogo from '../assets/image/ltac-brand.png'

interface Props {
    tagline?:string;
    handleLogoMarkup?: () => any;
    logoMarkup:boolean;
  }

const SiteLogo = ({tagline, handleLogoMarkup, logoMarkup}:Props) => {
  return (
    <div className="site-header-logo">
        <div className="site-logo-media">
          { location.pathname == "/corgi-app/" ? 
          (
            <h1 className="site-logo-title">  
                <Link className="site-logo-media__link" to="/corgi-app/"
                >
                  <span className="visually-hidden">{tagline}</span>
                  <img src={ltacLogo} alt="Corgi" className="site-logo-media__link-img" />
                </Link>
            </h1>
          ) :
          (
            <Link className="site-logo-media__link" to="/">
              <span className="visually-hidden">{tagline}</span>
              <img src={ltacLogo} alt="Corgi" className="site-logo-media__link-img" />
          </Link>
          )
        }
        </div>
    </div>
  )
}

export default SiteLogo
