import IMG from '../../assets/images/about-us.png'
const Hworks = () => {
  const sm = {
    maxWidth: '30em'
  }
  return (
    <section>
      <h1>How Haven-Square Works</h1>
      <p></p>
      
      <div>
        <div>
      <h2>LandLords</h2>
        <div>

        </div>
        </div>
        
        <div>
            <h2>Tenants</h2>
        </div>
        <div>
          <img
            src={IMG}
            alt=""
            className=""
            style={sm}
          />
        </div>
      </div>
    </section>
  )
}

export default Hworks
