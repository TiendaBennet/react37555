import logo from './logo.png';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import Products from './components/Products/Products';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; 

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Link to='/'><img src={logo} className="App-logo" alt="logo" /></Link>
      </header>
      <NavBar className="App-NavBar"></NavBar>
      <Routes>
        <Route path='/' element=  // el path es la url, la "/" atribuye al local host
          { <Products greeting="Revestimientos y Accesorios"/> } />
        <Route path='/categoria/:cat' element= {  
          <Products />} />
        <Route path='/revestimientos/:sku' element= {<ItemDetailContainer /> } />
        <Route path='*' element= { <h1>404: Te perdiste</h1> } /></Routes>
      <Footer />
    </div>
    </BrowserRouter>
);
}

export default App;
