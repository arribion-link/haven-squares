// import plans from './Plan.ts'

type PricingCardProps = {
  name: string;
  subtitle: string;
  priceMonthly: number;
  features: string[];
  btnClass: string;
}

const PricingCard = 
({name, priceMonthly, features, btnClass}:PricingCardProps) => {
  return (
    <div className="pricing-card-container">
      <div className="pricing-card">
         <h1 className="pricing-card-header">{name}</h1>
        <div>
            <h3 className="monthly-price">{priceMonthly}</h3>
            <span>KES/month</span>
        </div>
        <div className="features">
            {features.map((feature, index) => (
                <p key={index}>{feature}</p>
            ))}
        </div>
        <div>
            <button className={btnClass}>Get Started</button>   
        </div>
      </div>
    </div>
  )
}

export default PricingCard
