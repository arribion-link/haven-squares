import PricingCard from "../cards/PricingCard"

const Pricing = () => {
  return (
    <section className="pricing-section">
      <div className="section-header">
        <h2 className="section-title">Pricing Plans</h2>
        <p className="section-subtitle">Choose a plan that fits your needs</p>
      </div>
      <div className="pricing-container">
          <PricingCard
            name="Basic"
            subtitle="For individuals starting out"
            priceMonthly={0}
            features={[
              "Access to basic listings",
              "Standard support",
              "Limited property alerts",
            ]}
            btnClass="btn-primary-gradiant"
          />
          <PricingCard
            name="Premium"
            subtitle="For active renters and landlords"
            priceMonthly={15}
            features={[
              "Unlimited listings access",
              "Priority support",
              "Custom property alerts",
              "Verified landlord profiles",
            ]}
            btnClass="btn-success-gradiant"
          />
          <PricingCard
            name="Enterprise"
            subtitle="For property management companies"
            priceMonthly={50}
            features={[
              "Dedicated account manager",
              "Advanced analytics",
              "Team collaboration tools",
              "API access for integrations",
              "Customizable listings",
            ]}
            btnClass="btn-danger-gradiant"  
          />
      </div>
    </section>
  )
}

export default Pricing
