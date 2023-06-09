import html_logo from "./../assets/technologies/html5.svg"
import css_logo from "./../assets/technologies/css3.svg" 
import sass_logo from "./../assets/technologies/sass.svg" 
import javascript_logo from "./../assets/technologies/javascript.svg" 
import webpack_logo from "./../assets/technologies/webpack.svg" 
import react_logo from "./../assets/technologies/react.svg" 
import lodash_logo from "./../assets/technologies/lodash.svg" 
import tailwindcss_logo from "./../assets/technologies/tailwindcss.svg" 
import git_logo from "./../assets/technologies/git.svg" 
import github_logo from "./../assets/technologies/github.svg" 

export const HTML = {
    id: 1,
    name: "HTML",
    icon: html_logo,
    color: "#E34F26",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML"
}

export const CSS = {
    id: 2,
    name: "CSS",
    icon: css_logo,
    color: "#1572B6",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS"
}

export const Sass = {
    id: 3,
    name: "Sass",
    icon: sass_logo,
    color: "#CC6699",
    url: "https://sass-lang.com/"
}

export const JavaScript = {
    id: 4,
    name: "JavaScript",
    icon: javascript_logo,
    color: "#F7DF1E",
    url: "https://javascript.info/"
}

export const React = {
    id: 5,
    name: "React",
    icon: react_logo,
    color: "#61DAFB",
    url: "https://react.dev/"
}

export const Webpack = {
    id: 6,
    name: "Webpack",
    icon: webpack_logo,
    color: "#8DD6F9",
    url: "https://webpack.js.org/"
}

export const Lodash = {
    id: 7,
    name: "Lodash",
    icon: lodash_logo,
    color: "#3492FF",
    url: "https://lodash.com/"
}

export const TailwindCss = {
    id: 8,
    name: "Tailwind CSS",
    icon: tailwindcss_logo,
    color: "#06B6D4",
    url: "https://tailwindcss.com/"
}

export const Git = {
    id: 9,
    name: "Git",
    icon: git_logo,
    color: "#F05032",
    url: "https://git-scm.com/"
}

export const GitHub = {
    id: 10,
    name: "GitHub",
    icon: github_logo,
    color: "#181717",
    url: "https://github.com/"
}

const technologies = [HTML, CSS, JavaScript, React, TailwindCss, Sass, Webpack, Lodash, Git, GitHub]
export default technologies