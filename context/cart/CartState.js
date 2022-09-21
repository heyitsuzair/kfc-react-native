import React, {useState} from 'react';
import {Toast} from 'toastify-react-native';
import CartContext from './CartContext';

export default function authState({children}) {
  //state for items currently in cart
  const [cartItems, setCartItems] = useState([]);

  const addToCart = item => {
    setCartItems(cartItems.concat(item));
    Toast.success('Product Added!');
  };

  return (
    <CartContext.Provider value={{cartItems, setCartItems, addToCart}}>
      {children}
    </CartContext.Provider>
  );
}
