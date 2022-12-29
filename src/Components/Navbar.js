import "../Stylesheets/Navbar.css"

const Navbar = ({handleChange}) => {
    return (
            <nav className="nav-main">
                <h2 className="nav-header">Assignment</h2>
                <form className="search-container">
                    <input type="search" name="search" onChange={(e) => handleChange(e)} />
                    <button>Search</button>
                </form>
                    <ul className="nav-list">
                        <li><a>Sign in</a></li>
                    </ul>
            </nav>
    )
}

export default Navbar