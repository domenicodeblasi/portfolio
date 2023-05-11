import React from "react"
import { useTheme } from "../Context"
import MarigoldHexagon from "./../assets/marigold-hexagon.svg"
import MulberryHexagon from "./../assets/mulberry-hexagon.svg"
import EyeIcon from "./ui/EyeIcon"
import { GitHub } from "../data/technologies"

const Project = ({ project }) => {
    const darkTheme = useTheme()
    const { name, description, technologies, desktop_image, mobile_image, website_url, github_url } = project
    return (
        <div className="flex flex-col gap-y-6 bg-red-900">
            <div className={`bg-red-400 flex flex-col gap-y-2 w-full font-karla ${darkTheme ? "text-light" : "text-dark"}`}>
                <div className="bg-indigo-400 h-fit items-center flex gap-x-2">
                    <img
                        src={darkTheme ? MulberryHexagon : MarigoldHexagon}
                        alt="hexagon"
                        className="w-4"
                    />
                    <h4 className="font-semibold text-xl">{name}</h4>
                </div>
                <div className="pl-6 font-light bg-green-400">
                    <p>{description}</p>
                </div>
                <div className="bg-violet-500 pl-6 py-4 flex gap-y-4 flex-wrap">
                    {technologies.map(technology => {
                        const { name, icon } = technology
                        return (
                            <div className="bg-yellow-700 flex flex-col items-center basis-1/3">
                                <img
                                    src={icon}
                                    alt={`${name} icon`}
                                    className={`w-6 cursor-pointer transition-all duration-200 hover:scale-110 ${darkTheme ? "invert-[100%] sepia-[12%] saturate-[663%] hue-rotate-[275deg] brightness-[98%] contrast-[90%]" : "invert-[10%] sepia-[21%] saturate-[1%] hue-rotate-[314deg] brightness-[125%] contrast-[95%]"}`}
                                />
                                <p>{name}</p>
                            </div>
                        )
                    })}
                </div>
                <div className={`${darkTheme ? "bg-viridian" : "bg-mulberry"} flex items-center justify-between ml-6 px-4 py-2 rounded`}>
                    <h4 className="text-light font-semibold">View Project</h4>
                    <div className="bg-green-600 flex gap-x-6">
                        <a href={website_url}>
                            <EyeIcon />
                        </a>
                        <a href={github_url}>
                            <img
                                src={GitHub.icon}
                                alt="GitHub icon"
                                className={`w-5 invert-[100%] sepia-[12%] saturate-[663%] hue-rotate-[275deg] brightness-[98%] contrast-[90%]`}
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div className="bg-cyan-500 relative pl-6">
                <img
                    src={desktop_image}
                    alt={`${name} desktop image`}
                    className="w-[90%] border-2 border-dark rounded"
                />
                <img 
                    src={mobile_image}
                    alt={`${name} mobile image`}
                    className="absolute -bottom-4 right-0 w-1/4 border-2 border-dark rounded"
                />
            </div>
        </div>
    )
}

export default Project