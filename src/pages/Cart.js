import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto">
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="flex justify-between items-center border p-4">
            <div>
              <h2>{item.title}</h2>
              <p>${item.price} x {item.quantity}</p>
            </div>
            <div>
              <button
                onClick={() => increaseQuantity(item.id)}
                className="bg-green-500 text-white px-2 py-1 mx-2"
              >
                +
              </button>
              <button
                onClick={() => decreaseQuantity(item.id)}
                className="bg-yellow-500 text-white px-2 py-1 mx-2"
              >
                -
              </button>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-4 py-2"
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
      <div className="mt-4">
        <h2>Total Price: ${(total * 0.9).toFixed(2)} (10% Discount Applied)</h2>
      </div>
    </div>
  );
};

export default Cart;
