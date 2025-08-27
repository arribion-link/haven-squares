import Header from "../components/partials/Header"
import Hero from "../components/sections/Hero"
import About from "../components/sections/About"
import Galary from "../components/sections/Galary"
import Footer from "../components/partials/Footer"
import Pricing from "../components/sections/Pricing"


const home = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Pricing/>
      <Galary/>
      <Footer/>
    </div>
  )
}

export default home
