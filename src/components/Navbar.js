import React, { useState, useEffect } from "react"
import { useTheme, useUpdateTheme } from "./../Context"
import GreenHexagon from "./../assets/green-hexagon.svg"
import MarigoldHexagon from "./../assets/marigold-hexagon.svg"
import HamburgerLogo from "./ui/HamburgerLogo"
import DarkLightButton from "./ui/DarkLightButton"

const Navbar = () => {
    const darkTheme = useTheme()
    const toggleTheme = useUpdateTheme()
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener("resize", () => setScreenWidth(window.innerWidth))
    }, [])

    return (
        <div className={`${darkTheme ? "bg-dark" : "bg-light"} flex p-7 w-screen h-[60px] items-center justify-between font-karla`}>
            <div className="flex space-x-2">
                <img
                    src={`${darkTheme ? MarigoldHexagon : GreenHexagon}`}
                    alt="Domenico De Blasi logo"
                    className="w-4"
                />
                <h1 className={`${darkTheme ? "text-light" : "text-dark"} font-semibold`}>Domenico De Blasi</h1>
            </div>

            {screenWidth < 768 ? (
                <HamburgerLogo /> 
            ) : (
                <>
                    <DarkLightButton />
                    <ul className={`flex space-x-10 ${darkTheme ? "text-light" : "text-dark"}`}>
                        <li>Home</li>
                        <li>Projects</li>
                        <li>About</li>
                    </ul>
                </>

            )}
        </div>
    )
}

export default Navbar