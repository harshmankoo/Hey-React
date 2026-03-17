import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className="header">
            <div className="Navlogo">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ2qA2C7_fU5hAhs04cKig1LoENHMDNw4pCw&s" alt="Logo Image" />
            </div>
            <div className="SearchBar"><input type="text" placeholder="Search....." />
            </div>

            <div className="UserIcon">
                <i className="fa-solid fa-user"></i>
            </div>

        </nav>

    )
}
export default Navbar