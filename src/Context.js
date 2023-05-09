import React, { useState, useContext } from "react"

const ThemeContext = React.createContext()
const ThemeContextUpdate = React.createContext()
const MenuContext = React.createContext()
const ScrollbarContext = React.createContext()

export const useTheme = () => {
    return useContext(ThemeContext)
}

export const useUpdateTheme = () => {
    return useContext(ThemeContextUpdate)
}

export const useMenu = () => {
    return useContext(MenuContext)
}

export const useScrollbar = () => {
    return useContext(ScrollbarContext)
}

export const ThemeContextProvider = ({ children }) => {

    const [darkTheme, setDarkTheme] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const scrollbarWidth = window.innerWidth - document.body.clientWidth

    const toggleTheme = () => {
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }

    const toggleMenu = () => {
        setIsMenuOpen(prevValue => !prevValue)
    }

    return (
        <ThemeContext.Provider value={darkTheme}>
            <ThemeContextUpdate.Provider value={toggleTheme}>
                <MenuContext.Provider value={{ isMenuOpen, toggleMenu }}>
                    <ScrollbarContext.Provider value={scrollbarWidth}>
                        {children}
                    </ScrollbarContext.Provider>
                </MenuContext.Provider>
            </ThemeContextUpdate.Provider>
        </ThemeContext.Provider>
    )
}