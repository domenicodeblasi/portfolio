import React from "react"
import { useTheme } from "../Context"
import GreenHexagon from "./../assets/green-hexagon.svg"
import MarigoldHexagon from "./../assets/marigold-hexagon.svg"
import resume from "./../assets/resume_DomenicoDeBlasi.pdf"

const Contact = () => {
    const darkTheme = useTheme()
    return (
        <section className="space-y-6">
            <div className="flex space-x-3">
                <img
                    src={darkTheme ? MarigoldHexagon : GreenHexagon}
                    alt="green hexagon"
                    className="w-4"
                />
                <h2 className={`text-2xl font-semibold font-karla ${darkTheme ? "text-light" : "text-dark"}`}>Contact</h2>
            </div>
            <ul className={`flex flex-col w-full items-center pb-8 px-8 gap-1 font-karla ${darkTheme ? "text-light" : "text-dark"}`}>
                <li className="cursor-pointer hover:font-semibold transition-all duration-200">
                    <a href="mailto:domenico.deblasi33@gmail.com">
                        Email
                    </a>
                </li>
                <li className="cursor-pointer hover:font-semibold transition-all duration-200">
                    <a href="https://www.linkedin.com/in/domenico-de-blasi/">
                        LinkedIn
                    </a>
                </li>
                <li className="cursor-pointer hover:font-semibold transition-all duration-200">
                    <a
                        href={resume}
                        type="application/pdf"
                        target="_blank"
                        rel="noreferrer" 
                    >
                        Resume
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default Contact