import React from "react"
import { useTheme, useScrollbar } from "../Context"
import meViridian from "./../assets/about/me-viridian.png"
import meMarigold from "./../assets/about/me-marigold.png"
import HeroHeadline from "./../components/HeroHeadline"
import Skills from "./../components/Skills"
import Contact from "../components/Contact"

const About = () => {
    const darkTheme = useTheme()
    const scrollbarWidth = useScrollbar()
    return (
        <main className={`px-7 w-[calc(100vw-${scrollbarWidth})] transition-colors duration-500 space-y-8 ${darkTheme ? "bg-dark" : "bg-light"}`}>
            <section className={`w-full flex flex-col items-center pt-10 space-y-8
                lg:pt-0 lg:flex-row lg:justify-center lg:h-[calc(100vh-60px)] lg:space-x-8`}
            >
                <div className="flex flex-col space-y-8 items-center md:w-[80%] lg:max-w-[50%] lg:items-start">
                    <HeroHeadline />
                    <div className={`font-karla font-light space-y-4 ${darkTheme ? "text-light" : "text-dark"}`}>
                        <p>I'm Domenico De Blasi, a Junior Front End Developer based in Parma (Italy), who has recently started a journey in this world. I'm an highly motivated learner, with the will to increase my skills. I'm careful to details and I chase perfection in everything I do, with great attention to optimize my time well.</p>
                        <p>As a web developer, my goal is to build challenging web interfaces, combining what I've learned and what I'm learning, always trying to improve the final product.</p>
                        <p>When I'm not in front of a computer screen, probably I'm spending time with friends, playing video games, travelling or listening to some good music.</p>
                    </div>
                </div>
                <img
                    src={darkTheme ? meMarigold : meViridian}
                    alt="main logo"
                    className="w-[50%] min-w-[250px] max-w-[300px] lg:max-w-[400px]"
                />
            </section>
            <Skills />
            <Contact />
        </main>
    )
}

export default About