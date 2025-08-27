
const Navbar = () => {
  const activeStyle = {
    color: "#0898d1",
    borderBottom: "2px solid #0898d1",
    paddingBottom: "0.5em"
  };
  return (
    <div className="navbar">
        <div className="logo">
        <h4>HAVEN-SQURE </h4>
        </div>
        <nav className="nav">
            <ul>
                <li><a href="" style={activeStyle}>Home</a></li>
                <li><a href="">House Listing</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">About Us</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
