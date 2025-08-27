import  HousePrevImage  from '../../assets/house-preview.jpg'
<script src="https://kit.fontawesome.com/3e1a4784df.js"></script>
const HousePrevCard = () => {
    const imgStyle = {
        width: '200px',
        height: '150px',
        objectFit: 'cover' as const,
        borderRadius: '8px',
      };
  return (
    <div className="house-prev-card">
      <div>
        <img src={HousePrevImage} alt="" 
        style={imgStyle}
        />
      </div>
      <div>
        <h3>House Title</h3>
        <p>House Description</p>
        <div>
            <span>
                
                Location
            </span>
            <span>•</span>
            <span>
               
                Room Size
            </span>
            <span>•</span>
            <span>
                <i className="fa-solid fa-ruler-combined"></i>
                Area
            </span>
        </div>
        <span>Price</span>
      </div>
    </div>
  )
}

export default HousePrevCard
