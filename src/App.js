
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import { CartProvider } from './context/CartContext';



function App() {

  return (
    <div className="App">
      <CartProvider>
      <BrowserRouter>
      <NavBar/>
     
      <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
      <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='*' element={<h1>404 NOT FOUND</h1>}/>

     </Routes>
     </BrowserRouter>
     </CartProvider>
     
     </div>
  );
}

export default App
