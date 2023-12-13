import React from "react"
import { useTheme } from "./../Context"

const HeroHeadline = () => {
    const darkTheme = useTheme()
    return (
        <div className="font-karla space-y-1 md:space-y-5">
            <h1 className={`uppercase font-black text-4xl md:text-[60px] ${darkTheme ? "text-marigold" : "text-viridian"}`}>ciao!</h1>
            <h3 className={`font-semibold text-xl md:text-3xl ${darkTheme ? "text-light" : "text-dark"}`}>Sono Domenico, <br /> sviluppo interfacce per il web</h3>
        </div>
    )
}

export default HeroHeadline