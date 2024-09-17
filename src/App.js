import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './pages/Products';
import Cart from './pages/Cart';
import CartProvider from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="container mx-auto p-4">
          <nav className="mb-4">
            <a href="/" className="mr-4 text-blue-500">Products</a>
            <a href="/cart" className="text-blue-500">Cart</a>
          </nav>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
