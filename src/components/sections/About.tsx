import aboutUsImg from '../../assets/images/about-us.png'

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
    </section>
  )
}

export default About
