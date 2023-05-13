import React, { useState, useEffect } from "react"
import { useTheme } from "../Context"
import MarigoldHexagon from "./../assets/marigold-hexagon.svg"
import MulberryHexagon from "./../assets/mulberry-hexagon.svg"
import EyeIcon from "./ui/EyeIcon"
import { GitHub } from "../data/technologies"

const Project = ({ project }) => {
    const darkTheme = useTheme()
    const { name, description, technologies, desktop_image, mobile_image, website_url, github_url } = project
    const [borderColorPreview, setBorderColorPreview] = useState("#be4b88")

    useEffect(() => {
        if (darkTheme) {
            setBorderColorPreview("#109193")
        } else {
            setBorderColorPreview("#be4b88")
        }
    }, [darkTheme])

    const previewStyles = {
        borderColor: borderColorPreview
    }

    const handleMouseEnter = () => {
        if (darkTheme) {
            setBorderColorPreview("#be4b88")
        } else {
            setBorderColorPreview("#ed9f31")
        }

    }

    const handleMouseLeave = () => {
        if (darkTheme) {
            setBorderColorPreview("#109193")
        } else {
            setBorderColorPreview("#be4b88")
        }
    }

    return (
        <div className="flex flex-col gap-y-6 lg:flex-row xl:gap-x-5">
            <div className={`flex flex-col gap-y-2 w-full font-karla ${darkTheme ? "text-light" : "text-dark"} xl:basis-2/5`}>
                <div className="h-fit items-center flex gap-x-2 lg:mb-2">
                    <img
                        src={darkTheme ? MulberryHexagon : MarigoldHexagon}
                        alt="hexagon"
                        className="w-4"
                    />
                    <h4 className="font-semibold text-xl">{name}</h4>
                </div>
                <div className="pl-6 font-light">
                    <p>{description}</p>
                </div>
                <div className="pl-6 py-4 flex gap-y-4 flex-wrap">
                    {technologies.map(technology => {
                        const { name, icon, id, url } = technology
                        return (
                            <div key={id} className="flex flex-col items-center basis-1/2 sm:basis-1/4 md:basis-1/5 lg:basis-1/3">
                                <a href={url}>
                                    <img
                                        src={icon}
                                        alt={`${name}`}
                                        className={`w-6 cursor-pointer transition-all duration-200 hover:scale-110 ${darkTheme ? "invert-[100%] sepia-[12%] saturate-[663%] hue-rotate-[275deg] brightness-[98%] contrast-[90%]" : "invert-[10%] sepia-[21%] saturate-[1%] hue-rotate-[314deg] brightness-[125%] contrast-[95%]"}`}
                                    />
                                </a>
                                <p className="text-sm">{name}</p>
                            </div>
                        )
                    })}
                </div>
                <div className={`${darkTheme ? "bg-viridian" : "bg-mulberry"} flex flex-col gap-y-3 sm:flex-row items-center justify-between ml-6 px-4 py-2 sm:py-4 rounded transition-colors duration-500 ${darkTheme ? "hover:bg-mulberry" : "hover:bg-marigold"}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <h4 className="text-light font-semibold">View Project</h4>
                    <div className="flex gap-x-6">
                        <a href={website_url}>
                            <EyeIcon />
                        </a>
                        <a href={github_url}>
                            <img
                                src={GitHub.icon}
                                alt="GitHub"
                                className={`w-6 invert-[100%] sepia-[12%] saturate-[663%] hue-rotate-[275deg] brightness-[98%] contrast-[90%]`}
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div className="relative pl-6">
                <img
                    src={desktop_image}
                    alt={`${name} desktop`}
                    style={previewStyles}
                    className={`desktop-preview w-[90%] border-[3px] md:border-4 rounded transition-colors duration-500 sm:rounded-lg xl:w-[80%]`}
                />
                <img
                    src={mobile_image}
                    alt={`${name} mobile`}
                    style={previewStyles}
                    className={`mobile-preview absolute -bottom-4 right-0 w-1/4 border-[3px] rounded transition-colors duration-500 md:border-4 sm:rounded-lg`}
                />
            </div>
        </div>
    )
}

export default Project