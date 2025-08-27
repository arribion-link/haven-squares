import Filter from "../cards/Filter"
import HousePrevCard from "../cards/HousePrevCard"

const PrevListing = () => {
  return (
    <section className="prev-listing-section">
      <div className="housepreview-container">
        <Filter/>
        <HousePrevCard/>
        <HousePrevCard/>
        {/* <HousePrevCard/>
        <HousePrevCard/> */}
      </div>
    </section>
  )
}

export default PrevListing
