import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Skills from "./components/Skills"
/* IMMAGINI */
import Typewriter from "./assets/typewriter.png"
import Book from "./assets/book3.png"

function App() {
  return (
    <>
      <Navbar />
      <Hero immagine={Typewriter} />
      <Skills immagine={Book} />
    </>
  )
}

export default App
