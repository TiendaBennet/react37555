import logo from './../../assetsbennet/logo.png'
import './header.css';
import NavBar from '../NavBar/NavBar'
import { Link } from "react-router-dom";


function Header() {

    return (
        <div className="header-container">
            <header className="header">
                <div className="header__logo-container">
                    <Link to='/'><img src={logo} className="App-logo" alt="logo" /></Link>
                </div>
                <div></div>
                <div></div>
                <NavBar />
                
            </header>
            
        </div>
    );
}

export default Header;