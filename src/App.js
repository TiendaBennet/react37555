import logo from './logo.png';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import Products from './components/Products/Products';
import Footer from './components/Footer/Footer';
import mockAPI from './services/mockAPI';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <NavBar className="App-NavBar"></NavBar>
      <Products greeting="Revestimientos y Accesorios"/>
      <Footer />
    </div>
  );
}

export default App;
