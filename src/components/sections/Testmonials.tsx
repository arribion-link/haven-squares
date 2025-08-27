import Testimonial from "../cards/TestimonialCard"
const Testmonials = () => {
  return (
    <section className="testmonials-section">
        <div className="section-header">
            <h1 className="section-title">What Our Users Say</h1>
            <p className="section-subtitle">Real stories from our community of tenants and landlords.</p>
        </div>
        <div className="testimonial-container">
            <Testimonial
                profilePic="https://randomuser.me/api/por"
                clientName="Alice Johnson"
                clientRole="Tenant"
                testimony="Haven-Squre made finding my new apartment a breeze! The direct communication with landlords saved me so much time."
                rating={4.5}
            />
                <Testimonial
                    profilePic="https://randomuser.me/api/por"
                    clientName="Mark Thompson"
                    clientRole="Landlord"
                    testimony="As a landlord, Haven-Squre has been invaluable. The platform's verified listings and direct tenant connections have streamlined my rental process."
                    rating={5}
                />
                <Testimonial
                    profilePic="https://randomuser.me/api/por"
                    clientName="Sophie Lee"
                    clientRole="Tenant"
                    testimony="I appreciate the transparency and security Haven-Squre offers. Renting my first home was less stressful thanks to their 24/7 support."
                    rating={4}
                />
        </div>
    </section>
  )
}

export default Testmonials
