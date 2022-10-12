import './App.css';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import MyProvider from './context/CartContext';
import Cart from './components/CartView/Cart';

function App() {
  return (
    <BrowserRouter>
      <div className='app__container'>
        <MyProvider>
        <Header />
      <Routes>   {/* el path es la url, la "/" atribuye al local host*/}
          <Route path='/' element={ <ItemListContainer greeting="Revestimientos y Accesorios"/> } />
          <Route path='/categoria/:cat' element= { <ItemListContainer />} />
          <Route path='/type/:type' element= { <ItemListContainer />} />
          <Route path='/producto/:id' element= {<ItemDetailContainer /> } />
          <Route path="/cart" element={ <Cart />} />
        </Routes>
        </MyProvider>
        </div>
      <Footer />
    </BrowserRouter>
);
}

export default App;
