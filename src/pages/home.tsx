import Header from "../components/partials/Header"
import Hero from "../components/sections/Hero"
import About from "../components/sections/About"
import Galary from "../components/sections/Galary"
import Footer from "../components/partials/Footer"
import Pricing from "../components/sections/Pricing"
import Testmonials from "../components/sections/Testmonials"

const home = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Testmonials/>
      <Pricing/>
      <Galary/>
      <Footer/>
    </div>
  )
}

export default home
