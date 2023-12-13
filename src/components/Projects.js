import React from "react"
import { useTheme } from "../Context"
import projects from "./../data/projects"
import GreenHexagon from "./../assets/green-hexagon.svg"
import MarigoldHexagon from "./../assets/marigold-hexagon.svg"
import Project from "./Project"

const Projects = () => {
    const darkTheme = useTheme()
    return (
        <section className="space-y-6">
            <div className="flex space-x-3">
                <img
                    src={darkTheme ? MarigoldHexagon : GreenHexagon}
                    alt="hexagon"
                    className="w-4"
                />
                <h2 className={`text-2xl font-semibold font-karla ${darkTheme ? "text-light" : "text-dark"}`}>Progetti</h2>
            </div>
            <div className="w-full flex flex-col items-center pl-8 gap-y-12 xl:gap-y-16">
                {projects.map(project => {
                    const { id } = project
                    return (
                        <Project key={id} project={project} />
                    )
                })}
            </div>
        </section>
    )
}

export default Projects