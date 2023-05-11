import { HTML, CSS, Sass, JavaScript, Webpack, Lodash, React, TailwindCss } from "./../data/technologies"
import counterMobile from "./../assets/projects/counter-mobile.png"
import counterDesktop from "./../assets/projects/counter-desktop.png"
import nextbookMobile from "./../assets/projects/nextbook-mobile.png"
import nextbookDesktop from "./../assets/projects/nextbook-desktop.png"
import cinemilleMobile from "./../assets/projects/cinemille-mobile.png"
import cinemilleDesktop from "./../assets/projects/cinemille-desktop.png"

const projects = [
        {
        id: 1,
        name: "Multisala CineMille",
        description: "CineMille is a simple web app that helps you find the latest movies playing at theater. With CineMille, you can quickly view the 12 movies currently on schedule at cinema. Get detailed information on showtimes, and plan your next movie outing with ease. Whether you're a cinephile or just looking for a fun night out at the cinema, CineMille can help you find the perfect film.",
        technologies: [React, TailwindCss],
        desktop_image: cinemilleDesktop,
        mobile_image: cinemilleMobile,
        website_url: "https://cinemille.netlify.app/",
        github_url: "https://github.com/domenicodeblasi/multisala-cinemille",
    },
    {
        id: 2,
        name: "nextbook",
        description: "This website lets you find books by searching for category or subject. It gives you useful information about each book, like what it looks like and what it's about. The website is easy to use and helps you discover new books that you might like. Whether you love to read or just want to find something new, this website can help you find the right book for you.",
        technologies: [HTML, Sass, JavaScript, Webpack, Lodash],
        desktop_image: nextbookDesktop,
        mobile_image: nextbookMobile,
        website_url: "https://nextbookjs.netlify.app/",
        github_url: "https://github.com/domenicodeblasi/nextbook",
    },
    {
        id: 3,
        name: ".counter.",
        description: "This web app is a counter that can track numbers from -99999 to 99999. You can add or subtract from the number on the screen and reset everything if needed. It's an easy way to keep count of things!",
        technologies: [HTML, CSS, Sass, JavaScript],
        desktop_image: counterDesktop,
        mobile_image: counterMobile,
        website_url: "https://counter-ddb.netlify.app/",
        github_url: "https://github.com/domenicodeblasi/counter-js",
    },
]

export default projects