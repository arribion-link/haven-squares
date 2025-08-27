type ServicesCardProps = {
  title: string;
  description: string;
  icon: string;
}
const ServicesCard = 
({title, description, icon}:ServicesCardProps) => {
  return (
    <div className="services-card">
      <div className="service-card-header">
          <img src={icon} alt="Service Icon" className="service-icon" />
        <div>
          <h1>{title}</h1>
        </div>
      </div>
        <p> {description} </p>
    </div>
  )
}

export default ServicesCard
