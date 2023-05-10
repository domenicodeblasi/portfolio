import React from "react"
import { useTheme } from "./../Context"

const SkillCard = ({ technology }) => {
    const darkTheme = useTheme()
    const { name, icon, color, url } = technology
    return (
        <a
            className={`h-10 w-full max-w-[400px] flex items-center px-4 space-x-4 border-x-[6px] rounded shadow-inner outline outline-1 transition-all duration-500 ${darkTheme ? "outline-dark-100 shadow-dark-100" : "outline-light-100 shadow-light-100"}
                hover:shadow hover:transition-all duration-500 hover:outline-none ${darkTheme ? "hover:bg-dark-100 hover:scale-[102%]" : "hover:bg-light-100 hover:scale-[102%]"}
                md:max-w-[300px]`}
            style={{ borderColor: color }}
            href={url}
        >
            <img
                src={icon}
                className={`w-6 ${darkTheme ? "invert-[100%] sepia-[12%] saturate-[663%] hue-rotate-[275deg] brightness-[98%] contrast-[90%]" : "invert-[10%] sepia-[21%] saturate-[1%] hue-rotate-[314deg] brightness-[125%] contrast-[95%]"}`}
            />
            <h3 className={`font-karla ${darkTheme ? "text-light" : "text-dark"}`}>{name}</h3>
        </a>
    )
}

export default SkillCard