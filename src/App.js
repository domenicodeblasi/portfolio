import React from "react"
import { ThemeContextProvider } from "./Context"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <ThemeContextProvider>
      <Navbar />
    </ThemeContextProvider>
  )
}

export default App