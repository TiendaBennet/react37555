import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping }  from "@fortawesome/free-solid-svg-icons";

function NavBar() {
    return(
        <nav className="navbar">
            <ul>
                <li class="className"><a target="_blank">Aberturas</a></li>
                <li class="className"><a target="_blank">Madera Plastica WPC</a></li>
                <li class="className"><a target="_blank">Jardin y Exteriores</a></li>                    
                <li class="className"><a target="_blank">Piedras</a></li>
                <li class="className"><a target="_blank">Tablones</a></li>
                <li class="className"><a target="_blank">Revestimientos PVC</a></li>
                <li class="className"><a target="_blank">Contacto</a></li>
                <li><FontAwesomeIcon className="cartshopping" icon={ faCartShopping } /> </li>
            </ul>
        </nav>
        );
}

export default NavBar

