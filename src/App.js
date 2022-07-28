import "./Styles.js";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Partners from "./components/Partners.jsx";
import Steps from "./components/Steps.jsx";
import Drops from "./components/Drops.jsx";
import TopCollections from "./components/TopCollections.jsx";
import Explore from "./components/Explore.jsx";
import Subscribe from "./components/Subscribe.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Partners />
      <Steps />
      <Drops />
      <TopCollections />
      <Explore />
      <Subscribe />
      <Footer />
    </div>
  );
}
export default App;
