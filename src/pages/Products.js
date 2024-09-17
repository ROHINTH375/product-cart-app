import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Products = () => {
  const [products, setProducts] = useState([]);
  const { addToCart, cartItems, removeFromCart } = useContext(CartContext);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map((product) => {
        const inCart = cartItems.find((item) => item.id === product.id);
        return (
          <div key={product.id} className="border p-4">
            <img src={product.image} alt={product.title} className="w-full h-64 object-cover" />
            <h2 className="text-lg font-bold">{product.title}</h2>
            <p>${product.price}</p>
            <p>{product.description}</p>
            {inCart ? (
              <button
                onClick={() => removeFromCart(product.id)}
                className="bg-red-500 text-white px-4 py-2 mt-2"
              >
                Remove from Cart
              </button>
            ) : (
              <button
                onClick={() => addToCart(product)}
                className="bg-blue-500 text-white px-4 py-2 mt-2"
              >
                Add to Cart
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Products;
