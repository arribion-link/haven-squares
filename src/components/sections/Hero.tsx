import { Link } from "react-router-dom"
const Hero = () => {
  return (
    <section className="hero-section">
      <div className="">
        <div className="cta-container">
          <h1 className="heading">
            Find, Manage & Rent Smarter — All in One Place
          </h1>
          <h2 className="subheading">
            Whether you're a landlord or a tenant, our platform makes property
            management effortless. <br /> Discover available rentals, automate
            payments, and stay connected—all from your phone.
          </h2>
          <div className="button-group">

            <Link to="/">
              <button className="primary-btn">
                🔍 Browse Available Rentals
              </button>
            </Link>

            <Link to="/dashboard">
              <button className="secondary-btn">
                📲 Get Started as a Landlord
              </button>
            </Link>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero
