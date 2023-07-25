import {createContext, useContext} from 'react';

//Here we are setting variables in our interfaces. This is our bluprint on everything we are looking for

//state
export interface UseDarkModeState{
    darkMode: boolean;
}
//these are our functions
export interface UseDarkModeActor{
    setDarkMode:(value:boolean) => void;
}

//Here we create context  between states and functions
export interface UseDarkModeContext{
    state: UseDarkModeState;
    actor: UseDarkModeActor; //functions
}

//we are only creating context that uses these interfaces BUT does not return anything
const SiteThemeContext = createContext<UseDarkModeContext | null>(null);

export default SiteThemeContext;

//Here we set to use the context. we created a hook that lets the dev know if they are missing the provider
export function useSiteThemeContext() : UseDarkModeContext  {
    const context = useContext(SiteThemeContext);
    if(!context){
        throw new Error('useSiteThemeContext must be used within a SiteThemeContext');
    }
    return context;
}