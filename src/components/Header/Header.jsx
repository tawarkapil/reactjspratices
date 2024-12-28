import { Link } from "react-router";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                Navbar
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/expense">
                            Expense 
                        </Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link className="nav-link" to="/context">
                            context
                        </Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link className="nav-link" to="/useRef">
                            use Ref Example
                        </Link>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">
                            Disabled
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;