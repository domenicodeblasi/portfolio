import React, { useState, useEffect } from "react"
import { useTheme, useMenu } from "./../Context"
import { Link } from "react-router-dom"

import GreenHexagon from "./../assets/green-hexagon.svg"
import MarigoldHexagon from "./../assets/marigold-hexagon.svg"
import HamburgerLogo from "./ui/HamburgerLogo"
import DarkLightButton from "./ui/DarkLightButton"

import Menu from "./Menu"

const Navbar = () => {
    const darkTheme = useTheme()
    const { isMenuOpen } = useMenu()
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    const handleResize = () => {
        setScreenWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return (
        <>
            <div className={`${darkTheme ? "bg-dark" : "bg-light"} fixed z-20 transition-colors duration-500 flex p-7 w-screen h-[60px] items-center ${!isMenuOpen && "shadow-md shadow-[rgba(0,0,0,0.15)]"} ${isMenuOpen ? "justify-end" : "justify-between"} font-karla`}>
                {!isMenuOpen && <div className="flex space-x-2">
                    <img
                        src={`${darkTheme ? MarigoldHexagon : GreenHexagon}`}
                        alt="hexagon logo"
                        className="w-4"
                    />
                    <h1 className={`${darkTheme ? "text-light" : "text-dark"} font-semibold`}>Domenico De Blasi</h1>
                </div>}
                {screenWidth < 768 ? (
                    <HamburgerLogo />
                ) : (
                    <>
                        <DarkLightButton />
                        <ul className={`flex space-x-10 ${darkTheme ? "text-light" : "text-dark"}`}>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                        </ul>
                    </>
                )}
            </div>
            {isMenuOpen && <Menu />}
        </>

    )
}

export default Navbar