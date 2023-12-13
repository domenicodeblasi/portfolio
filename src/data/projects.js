import { HTML, CSS, Sass, JavaScript, Webpack, Lodash, React, TailwindCss, Axios, Leaflet, ReactRouter } from "./../data/technologies"
import counterMobile from "./../assets/projects/counter-mobile.png"
import counterDesktop from "./../assets/projects/counter-desktop.png"
import nextbookMobile from "./../assets/projects/nextbook-mobile.png"
import nextbookDesktop from "./../assets/projects/nextbook-desktop.png"
import cinemilleMobile from "./../assets/projects/cinemille-mobile.png"
import cinemilleDesktop from "./../assets/projects/cinemille-desktop.png"
import NYTMobile from "./../assets/projects/nyt-mobile.png"
import NYTDesktop from "./../assets/projects/nyt-desktop.png"
import consciousCarbonMobile from "./../assets/projects/conscious-carbon-mobile.png"
import consciousCarbonDesktop from "./../assets/projects/conscious-carbon-desktop.png"

const projects = [
    {
        id: 1,
        name: "Conscious Carbon",
        description: "Conscious Carbon è un'applicazione web che offre un quadro completo delle emissioni di monossido di carbonio (CO). Filtra i dati per paese, coordinate geografiche e consente agli utenti di esplorare le informazioni all'interno di un periodo di tempo selezionato.",
        technologies: [React, JavaScript, CSS, Leaflet, ReactRouter],
        desktop_image: consciousCarbonDesktop,
        mobile_image: consciousCarbonMobile,
        website_url: "https://conscious-carbon.netlify.app/",
        github_url: "https://github.com/domenicodeblasi/conscious-carbon",
    },
    {
        id: 2,
        name: "The New York Times Clone",
        description: "Questa applicazione web è una replica della homepage del New York Times. Riproduce fedelmente la struttura e i contenuti del sito originale, con una funzionalità aggiuntiva che consente agli utenti di aggiungere ai preferiti gli articoli e le notizie che più apprezzano.",
        technologies: [React, JavaScript, TailwindCss, Axios, ReactRouter],
        desktop_image: NYTDesktop,
        mobile_image: NYTMobile,
        website_url: "https://nyt-clone.netlify.app/",
        github_url: "https://github.com/domenicodeblasi/nyt-clone",
    },
    {
        id: 3,
        name: "Multisala CineMille",
        description: "CineMille è una semplice applicazione web che ti aiuta a trovare gli ultimi film in proiezione al cinema, con la quale puoi visualizzare rapidamente i 12 film attualmente in programmazione nelle sale. Ottieni informazioni dettagliate sugli orari delle proiezioni e pianifica facilmente la tua prossima uscita al cinema. Che tu sia un appassionato di cinema o semplicemente in cerca di una divertente serata al cinema, CineMille può aiutarti a trovare il film perfetto.",
        technologies: [React, JavaScript, TailwindCss, ReactRouter],
        desktop_image: cinemilleDesktop,
        mobile_image: cinemilleMobile,
        website_url: "https://cinemille.netlify.app/",
        github_url: "https://github.com/domenicodeblasi/multisala-cinemille",
    },
    {
        id: 4,
        name: "nextbook",
        description: "nextbook è un sito web che ti permette di trovare libri cercando per categoria o argomento. Fornisce informazioni utili su ciascun libro, come la copertina e la trama. Il sito è facile da usare e ti aiuta a scoprire nuovi libri che potrebbero interessarti. Se ami leggere o desideri semplicemente trovare qualcosa di nuovo, questo sito può aiutarti a trovare il libro giusto per te.",
        technologies: [HTML, Sass, JavaScript, Webpack, Lodash],
        desktop_image: nextbookDesktop,
        mobile_image: nextbookMobile,
        website_url: "https://nextbookjs.netlify.app/",
        github_url: "https://github.com/domenicodeblasi/nextbook",
    },
    {
        id: 5,
        name: ".counter.",
        description: "Questa applicazione web è un counter in grado di mandare a display numeri da -99999 a 99999. Puoi aggiungere o sottrarre al numero visualizzato e resettare tutto se necessario. È un modo semplice per tenere il conto di qualsiasi cosa!",
        technologies: [HTML, CSS, Sass, JavaScript],
        desktop_image: counterDesktop,
        mobile_image: counterMobile,
        website_url: "https://counter-ddb.netlify.app/",
        github_url: "https://github.com/domenicodeblasi/counter-js",
    },
]

export default projects