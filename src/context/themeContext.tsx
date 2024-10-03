"use client"

import { createContext, ReactNode, useEffect, useState } from "react";

interface ThemeContextType {
    isDarkMode: boolean;
    toggleTheme: () => void;
}

interface ThemeProviderProps {
    children: ReactNode;
  }
export const ThemeContext =  createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    }

    useEffect(()=> {
        if(isDarkMode) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [isDarkMode])
    return (
        <ThemeContext.Provider value={{isDarkMode, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}