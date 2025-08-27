import aboutUsImg from '../../assets/images/about-us.png'
import ServicesCard from '../cards/ServicesCard';

const About = () => {
  const imgStyle = {
    width: '400px',
    height: '300px',
    objectFit: 'cover' as const,
    borderRadius: '8px',
  };
  return (
    <section className='about-section'>
        <div className="about-container">
          <div>
            <img 
              src={aboutUsImg} 
              alt="Haven-Squre Logo"
              style={imgStyle}
            />
          </div>
          <div>
            <span className='about-haven-squares'>About Haven-Squre</span>
            <h1 className='about-heading'>- Where Landlords and Tenants Meet.</h1>
            <h2>We’re a platform that connects tenants directly with landlords, making renting simpler, faster, and more transparent. Our goal is to remove barriers—no agents, no hidden fees—just verified listings and real connections. Whether you're listing a property or searching for your next home, we make the process easy and reliable.</h2>
          </div>
        </div>
        <div className="services-section">
          <h3 className='services-heading'>Our Core Services</h3>
          <div className="services-container">
            <ServicesCard
              title="Verified Listings"
              description="All properties are verified to ensure authenticity and accuracy."
              icon="https://img.icons8.com/ios-filled/50/000000/checked--v1.png"
            />
            <ServicesCard
              title="Direct Communication"
              description="Connect directly with landlords without intermediaries."
              icon="https://img.icons8.com/ios-filled/50/000000/chat--v1.png"
            />
            <ServicesCard
              title="Secure Transactions"
              description="We prioritize your security with safe payment options."
              icon="https://img.icons8.com/ios-filled/50/000000/lock--v1.png"
            />
            <ServicesCard
              title="24/7 Support"
              description="Our support team is available around the clock to assist you."
              icon="https://img.icons8.com/ios-filled/50/000000/customer-support.png"
            />
          </div>
        </div>
    </section>
  )
}

export default About
