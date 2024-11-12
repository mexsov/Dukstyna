// import React from "react";
import {Link} from "react-router-dom"

const Header = () => {
    

    return (
    <div className="header">

        <div className="header picture">
            <img src="" alt="mokyklos-foto" />
        </div>
        <div className="header tekstas">
            <ul>
                
                <li><Link to="/"></Link>Naujienos</li>
                <li><Link to="/Veiklos sritys"></Link>Veiklos sritys</li>
                <li><Link to="/Pagalba mokiniui"></Link>Pagalba mokiniui</li>
                <li><Link to="/Finansinės ataskaitos"></Link>Finansinės ataskaitos</li>
                <li><Link to="/Karjeros ugdymo centras"></Link>Karjeros ugdymo centras</li>
                <li><Link to="/Struktūra ir kontaktai"></Link>Struktūra ir kontaktai</li>
            </ul>
        </div>
    </div>
    );
}


export default Header