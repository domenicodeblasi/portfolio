import React from "react"
import { useScrollbar, useTheme } from "./../Context"
import MainLogo from "./../assets/ddb-logo.svg"
import HeroHeadline from "../components/HeroHeadline"
import Projects from "./../components/Projects"
import Contact from "./../components/Contact"

const Home = () => {
    const darkTheme = useTheme()
    const scrollbarWidth = useScrollbar()
    return (
        <main className={`px-7 w-[calc(100vw-${scrollbarWidth})] transition-colors duration-500 space-y-8 ${darkTheme ? "bg-dark" : "bg-light"}`}>
            <section className={`w-full flex flex-col items-center space-y-10 pt-10
                md:pt-0 md:h-[calc(100vh-60px)] md:flex-row md:justify-center md:space-x-[10%]`}>
                <img
                    src={MainLogo}
                    alt="main logo"
                    className="min-w-[250px] w-[70%] max-w-[400px] md:max-w-[600px]"
                />
                <HeroHeadline />
            </section>
            <Projects />
            <Contact />
        </main>
    )
}

export default Home