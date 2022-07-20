import "./Styles.js"

import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import Partners from "./components/Partners.jsx"
import Steps from "./components/Steps.jsx"
import Drops from "./components/Drops.jsx"
import TopCollections from "./components/TopCollections.jsx"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Partners />
      <Steps />
      <Drops />
      <TopCollections />
    </div>
  )
}
export default App
