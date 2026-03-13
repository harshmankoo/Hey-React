import "./Navbar.css"

const  Navbar = ()=>{
    return (
     <nav className="header">
        <div className="Navlogo">
        </div>
        <div className="SearchBar"><input type="text" placeholder="Search...." />
        </div>

        <div className="UserIcon">
            <i class="fa-solid fa-user"></i>
        </div>
        
     </nav>
        
    )
}
export default Navbar