import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
/* IMMAGINI */
import Typewriter from "./assets/typewriter.png"

function App() {
  return (
    <>
      <Navbar />
      <Hero immagine={Typewriter} />
    </>
  )
}

export default App
