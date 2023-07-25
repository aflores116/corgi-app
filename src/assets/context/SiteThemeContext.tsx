import {createContext, useContext} from 'react';

{/*
    This is a bluerpint because this is where we start devclaring
    states, functions, bundling them up, and creating the context.
*/ }


// Here we are declaring our states and the type of the function. This is something we want to bundle up into SiteThemeContext (context).
export interface UseDarkModeState{
    darkMode: boolean;
}

// Here we are delcaring our functions and the type of the function. This is step 2 of bundling up our context.
export interface UseDarkModeActor{
    setDarkMode:(value:boolean) => void;
}

// This is where we bundle the state and actors together. This is step 3 of bundling up our context.
export interface SiteThemeContext{
    state: UseDarkModeState;
    actor: UseDarkModeActor; 
}

// This is where we create our context and complete the bundle. Which the type of the context is <SiteThemeContext> the fall back will just be null.
const SiteThemeContext = createContext<SiteThemeContext | null>(null);

// This is where we export our context using the variable name
export default SiteThemeContext;

// This is where we create our hook using the context we created above. It will read an error if provider not used.
export function useSiteThemeContext() : SiteThemeContext  {
    const context = useContext(SiteThemeContext);
    if(!context){
        throw new Error('useSiteThemeContext must be used within a SiteThemeContext');
    }
    return context;
}
