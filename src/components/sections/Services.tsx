import ServicesCard from "../cards/ServicesCard"

const Services = () => {
  return (
    <div>
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
    </div>
  )
}

export default Services
