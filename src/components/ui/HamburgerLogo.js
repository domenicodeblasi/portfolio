import React from "react"
import { useTheme, useMenu } from "./../../Context"

const HamburgerLogo = () => {
    const darkTheme = useTheme()
    const { isMenuOpen, toggleMenu } = useMenu()
    return (
        <>
            <button className="relative w-6 h-5" onClick={toggleMenu}>
                <span className={`absolute top-0 left-0 w-3 h-[2px] ${darkTheme ? "bg-light" : "bg-dark"} rounded-xl origin-right transition-all duration-300 ${isMenuOpen && "translate-x-[9px] -rotate-45 transition-all duration-300 rounded-l-none"}`}></span>
                <span className={`absolute top-[calc(50%-1px)] left-0 w-6 h-[2px] ${darkTheme ? "bg-light" : "bg-dark"} rounded-xl origin-center transition-all duration-300 ${isMenuOpen && "rotate-45 transition-all duration-300"}`}></span>
                <span className={`absolute bottom-0 right-0 w-3 h-[2px] ${darkTheme ? "bg-light" : "bg-dark"} rounded-xl origin-left transition-all duration-300 ${isMenuOpen && "-translate-x-[9px] -rotate-45 transition-all duration-300 rounded-r-none"}`}></span>
            </button>
        </>
    )
}

export default HamburgerLogo