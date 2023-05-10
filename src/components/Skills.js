import React from "react"
import { useTheme } from "../Context"
import GreenHexagon from "./../assets/green-hexagon.svg"
import technologies from "./../data/technologies"
import SkillCard from "./SkillCard"

const Skills = () => {
    const darkTheme = useTheme()
    return (
        <section className=" space-y-6">
            <div className="flex space-x-3">
                <img
                    src={GreenHexagon}
                    alt="green hexagon"
                    className="w-4"
                />
                <h2 className={`text-2xl font-semibold font-karla ${darkTheme ? "text-light" : "text-dark"}`}>Skills</h2>
            </div>
            <div className=" w-full flex flex-row flex-wrap justify-center px-8 gap-4">
                {technologies.map(technology => {
                    const { id } = technology
                    return (
                    <SkillCard key={id} technology={technology} />
                )})}
            </div>
        </section>
    )
}

export default Skills