import '../Header/header.css';
import * as React from 'react';
import "./navBar.css";
import CartWidget from '../CartWidget/CartWidget'
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="App-header__nav-container">
            <nav className="App-header__nav">
                <ul>    
                    <li className="nav__sections">
                        <Link to="/">
                            <h2 className="nav__titles">Productos</h2>
                        </Link>
                        <ul className="dropdown">
                            <li><Link to="categoria/Aberturas" >Aberturas</Link></li>
                            <li><Link to="categoria/WPC">Madera Plastica WPC</Link></li>
                            <li><Link to="categoria/jardin-y-exteriores">Jardin y Exteriores</Link></li>
                            <li><Link to="categoria/Piedras">Piedras</Link></li>
                            <li><Link to="categoria/Tablones">Tablones</Link></li>
                            <li><Link to="categoria/Revestimientos">Revestimientos PVC</Link></li>
                        </ul>
                    </li>
                    <li className="nav__sections">
                        <Link to="/">
                            <h2 className="nav__titles">Buscar</h2>
                        </Link>
                        <ul className="dropdown">
                            <li>working..</li>
                        </ul>
                    </li>
                    <li className="nav__sections"><Link to="https://github.com/TiendaBennet/react37555"><h2 className="nav__titles">Blog</h2></Link></li>
                    <li className="nav__sections"><Link to="https://github.com/TiendaBennet/react37555"><h2 className="nav__titles">Contacto</h2></Link></li>
                    <li className="nav__sections"><Link to="https://github.com/TiendaBennet/react37555"><h2 className="nav__titles">Nosotros</h2></Link></li>
                </ul>
            </nav>
            <CartWidget/>
        </div>
    )
}

export default NavBar

