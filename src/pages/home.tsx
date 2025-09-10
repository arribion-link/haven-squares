import Header from "../components/partials/Header"
import Hero from "../components/sections/Hero"
import About from "../components/sections/About"
import Hworks from "../components/sections/Hworks"
import Footer from "../components/partials/Footer"
import Pricing from "../components/sections/Pricing"
import Testmonials from "../components/sections/Testmonials"
import Services from "../components/sections/Services"
const home = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Hworks />
      <Services/>
      <Testmonials/>
      <Pricing/>
      <Footer/>
    </div>
  )
}

export default home
