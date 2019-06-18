import React from "react";
import {Link} from "react-router-dom";

function Nav() {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h2 className="navbar-brand">Google Books</h2>
            <Link className="nav-item nav-link" to="/">Search</Link>
            <Link className="nav-item nav-link"to="/saved">Saved</Link>
        </nav>
    );
}

export default Nav;