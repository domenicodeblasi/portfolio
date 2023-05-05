import React, { useState, useContext } from "react"

const ThemeContext = React.createContext()
const ThemeContextUpdate = React.createContext()

export const useTheme = () => {
    return useContext(ThemeContext)
}

export const useUpdateTheme = () => {
    return useContext(ThemeContextUpdate)
}

export const ThemeContextProvider = ({ children }) => {
    const [darkTheme, setDarkTheme] = useState(false)
    const toggleTheme = () => {
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }
    return (
        <ThemeContext.Provider value={darkTheme}>
            <ThemeContextUpdate.Provider value={toggleTheme}>
                {children}
            </ThemeContextUpdate.Provider>
        </ThemeContext.Provider>
    )
}