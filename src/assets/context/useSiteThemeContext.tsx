import { useState } from 'react';
import {SiteThemeContext} from './SiteThemeContext';

//This is where we define everything that we want to use in our context.
//This is the building from our blueprint over at TutorialPageContext.tsx

{/* Here we crate our function and we are declaring the type to SiteThemeContext*/}
function useSiteTheme() : SiteThemeContext{ //useSiteTheme function will be used as our provider
    //our states and functions we declared and bundles on SiteThemeContext.tsx 
    const [darkMode, setDarkMode] = useState<boolean>(false);

    return {state : {darkMode}, actor: {setDarkMode}}
}
     
export default useSiteTheme;

