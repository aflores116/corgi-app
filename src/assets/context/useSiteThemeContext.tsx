import { useState } from 'react';
import {UseDarkModeContext} from './SiteThemeContext';

//This is where we define everything that we want to use in our context.
//This is the building from our blueprint over at TutorialPageContext.tsx

function useSiteTheme() : UseDarkModeContext{
     const [darkMode, setDarkMode] = useState<boolean>(false);

 return {state : {darkMode}, actor: {setDarkMode}}
}
     
export default useSiteTheme;

