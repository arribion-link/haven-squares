import Header from "./components/partials/Header"
import Hero from "./components/sections/Hero"
import SupportedBy from "./components/sections/SupportedBy"
import About from "./components/sections/About"
import HowItWorks from "./components/sections/HowItWorks"
import Blog from "./components/sections/Blog"
import Galary from "./components/sections/Galary"
import Footer from "./components/partials/Footer"

const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <SupportedBy/>
      <About/>
      <HowItWorks/>
      <Blog/>
      <Galary/>
      <Footer/>
    </div>
  )
}

export default App

