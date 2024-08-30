import React,{useState, useEffect, useContext} from 'react';

const ThemeContext = React.createContext();

export const useTheme = () => {
    return useContext(ThemeContext);
}

export const ThemeProvider = ({children}) => {

    const [darkMode, setDarkMode] = useState(localStorage.getItem('theme') || false);

    const switchTheme = () => {
        setDarkMode(!darkMode);
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', darkMode);
    }, [darkMode]);

    return(
        <ThemeContext.Provider value={{darkMode, switchTheme}}>{children}</ThemeContext.Provider>
    )
}