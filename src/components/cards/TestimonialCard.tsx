type TestimonialProps = {
    profilePic?: string;
  clientName: string;
    clientRole: string;
    testimony: string;
    rating: number; // e.g., 4.5 for 4 and a half
}

const Testimonial =
({profilePic ,clientName, clientRole, testimony, rating}:TestimonialProps) => {
  return (
    <div className="testimonial-card">
        <div className="client-info">
            <img src={profilePic} alt={ clientName }/>
            <div>
                <h1> {clientName} </h1>
                <p>{ clientRole }</p>
            </div>
        </div>
        <p className="client-message"> {testimony} </p>
        <div>
        {  
            [...Array(5)].map((_, index) => {
                const starValue = index + 1;    
                return (
                    <span key={index} className={ starValue <= Math.floor(rating) ? 'filled-star' : starValue === Math.ceil(rating) && rating % 1 !== 0 ? 'half-filled-star' : 'empty-star' }>
                        &#9733;     
                    </span>
                );
            })
        }
        </div>
    </div>
  )
}

export default Testimonial
