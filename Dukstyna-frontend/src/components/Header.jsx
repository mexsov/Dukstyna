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
                <li><Link to="/Veiklossritys"></Link>Veiklos sritys</li>
                <li><Link to="/Pagalbamokiniui"></Link>Pagalba mokiniui</li>
                <li><Link to="/Finansinėsataskaitos"></Link>Finansinės ataskaitos</li>
                <li><Link to="/Karjerosugdymo centras"></Link>Karjeros ugdymo centras</li>
                <li><Link to="/Struktūrairkontaktai"></Link>Struktūra ir kontaktai</li>
            </ul>
        </div>
    </div>
    );
}


export default Header