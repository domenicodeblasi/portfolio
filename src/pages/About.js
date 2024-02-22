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
        <main className={`relative top-[60px] px-7 w-[calc(100vw-${scrollbarWidth})] transition-colors duration-500 space-y-8 ${darkTheme ? "bg-dark" : "bg-light"}`}>
            <section className={`w-full flex flex-col items-center pt-10 space-y-8
                lg:pt-0 lg:flex-row lg:justify-center lg:h-[calc(100dvh-60px)] lg:space-x-8`}
            >
                <div className="flex flex-col space-y-8 items-center md:w-[80%] lg:max-w-[50%] lg:items-start">
                    <HeroHeadline />
                    <div className={`font-karla font-light space-y-4 ${darkTheme ? "text-light" : "text-dark"}`}>
                        <p>👨🏻‍💻 Mi chiamo Domenico De Blasi, sono uno Junior Web Developer con base a Parma. Ho recentemente completato un Master in Sviluppo Web Front End sulla piattaforma di start2impact University e sto completando il Master in Sviluppo Web Full Stack, esperienze formative che mi hanno notevolmente arricchito di competenze. Desidero crescere quanto più possibile e sono determinato a raggiungere l'eccellenza in ogni aspetto del mio lavoro. La dedizione costante e la voglia di mettermi sempre in gioco sono il motore che mi spinge ad entusiasmarmi nel contribuire al mondo dello sviluppo web.</p>
                        <p>🚀 Come sviluppatore web, il mio obiettivo è quello di progettare interfacce web coinvolgenti, combinando ciò che ho imparato e ciò che ogni giorno apprendo al fine di migliorare il prodotto finale per l'utente.</p>
                        <p>🌴 Quando non mi trovo davanti al computer, è probabile che io stia trascorrendo del tempo con i miei amici, condividendo momenti di compagnia. In alternativa, potrei trovarmi immerso nei videogiochi, o in viaggi alla scoperta di nuovi luoghi e culture, oppure semplicemente potrei essere seduto a godermi della buona musica.</p>
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