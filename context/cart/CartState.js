import React, {useState} from 'react';
import CartContext from './CartContext';

export default function authState({children}) {
  //state for items currently in cart
  const [cartItems, setCartItems] = useState(null);

  return (
    <CartContext.Provider value={{cartItems, setCartItems}}>
      {children}
    </CartContext.Provider>
  );
}
