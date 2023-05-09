import React from "react"
import { ThemeContextProvider } from "./Context"
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"

const App = () => {
  return (
    <ThemeContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </ThemeContextProvider>
  )
}

export default App