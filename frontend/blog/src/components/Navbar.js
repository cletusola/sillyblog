import React from "react";
import { Link, NavLink} from 'react-router-dom';

// Nav bar Component 
const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
            <Link className="navbar-brand" to='/'>Silly Blog</Link>
            <button
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarNav" 
                aria-controls="navbarNav" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                    <NavLink className="nav-link active" end to='/'>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" end to='/blog'>Blog</NavLink>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    )
}

export default Navbar;