import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return(
        <header className="headerComponent">
            <h2 className="cmpnyName">Rocket Company</h2> 
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                    <li><Link to="/Careers">Careers</Link></li>
                </ul>
        </header>
    );
}
export default Header;