import "./navBar.css";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
    return(
        <nav className="navbar">
            <ul>
            <Link to='/aberturas'><li class="className">Aberturas</li></Link>
            <Link to='/wpc'><li class="className">Madera Plastica WPC</li></Link>
            <Link to='/jardin-y-exteriores'><li class="className">Jardin y Exteriores</li></Link>                    
            <Link to='/piedras'><li class="className">Piedras</li></Link>
            <Link to='/tablones'><li class="className">Tablones</li></Link>
            <Link to='/revestimientos'><li class="className">Revestimientos PVC</li></Link>
            <Link to='/contacto'><li class="className">Contacto</li></Link>     
            </ul>
            <div><CartWidget /></div>
        </nav>
        );
}

export default NavBar

