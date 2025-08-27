
const Filter = () => {
  return (
    <div>
       <div className="bottom-bar">
            <div className="search-bar">
                <input type="search" />
            </div>
            <div className="house-filter">

                <select name="" id="">
                    <option value="">All</option>
                </select>

                <select name="" id="">
                    <option value="">Location</option>
                    <option value="">County</option>
                    <option value="">City</option>
                </select>

                <select name="" id="">
                    <option value="" >Room Size</option>
                    <option value="">Sigle Room</option>
                    <option value="">1 bedroom</option>
                    <option value="">2 bedroom</option>
                    <option value="">3 bedroom</option>
                    <option value="">4 bedroom</option>
                    <option value="">5 bedroom</option>
                    <option value="">More than 5 bedroom</option>
                </select>

                <select name="" id="">
                    area
                    <option value=""></option>
                    <option value="">County</option>
                    <option value="">City</option>
                </select>
                
            </div>
        </div>
    </div>
  )
}

export default Filter
