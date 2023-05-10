import React from "react"
import DarkLightButton from "./ui/DarkLightButton"
import { useTheme, useMenu } from "./../Context"
import { Link } from "react-router-dom"

const Menu = () => {
    const darkTheme = useTheme()
    const { toggleMenu } = useMenu()
    return (
        <div className={`absolute z-10 h-[calc(100vh-60px)] w-screen p-7 flex flex-col justify-between ${darkTheme ? "bg-dark" : "bg-light"} transition-colors duration-500`}>
            <ul className={`flex flex-col space-y-10 font-semibold text-3xl mt-10 ${darkTheme ? "text-light" : "text-dark"}`}>
                <li onClick={toggleMenu}>
                    <Link to="/">Home</Link>
                </li>
                <li onClick={toggleMenu}>
                    <Link to="/">Projects</Link>
                </li>
                <li onClick={toggleMenu}>
                    <Link to="/about">About</Link>
                </li>
            </ul>
            <div>
                <DarkLightButton />
            </div>
        </div>
    )
}

export default Menu