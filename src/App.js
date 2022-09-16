import logo from './logo.png';
import './App.css';
import NavBar from "./components/NavBar";
import Products from './components/Products/Products';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      </header>
      <NavBar className="App-NavBar"></NavBar>
      <Products />
      <Footer />
    </div>
  );
}

export default App;
