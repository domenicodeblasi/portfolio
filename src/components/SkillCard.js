import React from "react"
import { useTheme } from "./../Context"

const SkillCard = ({ technology }) => {
    const darkTheme = useTheme()
    const { name, icon, color, url } = technology
    return (
        <a
            className={`h-12 w-full max-w-[400px] flex items-center px-4 space-x-4 border-x-[6px] rounded shadow-inner transition-all duration-300 ${darkTheme ? "bg-dark-100 shadow-dark-200" : "bg-light-100 shadow-light-200"}
                hover:shadow ${darkTheme ? "hover:bg-dark-200 hover:scale-[102%]" : "hover:bg-light-200 hover:scale-[102%]"}
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