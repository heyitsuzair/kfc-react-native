import React, {useState} from 'react';
import {Toast} from 'toastify-react-native';
import CartContext from './CartContext';

export default function authState({children}) {
  //state for items currently in cart
  const [cartItems, setCartItems] = useState([]);

  // state to hold total amount
  const [totalAmount, setTotalAmount] = useState(0);

  const addToCart = item => {
    setCartItems(cartItems.concat(item));

    let amount = totalAmount;
    // adding product price in total amount by multiplying its price by quantity
    amount += item.quantity * item.product.price;

    // adding addons price in total amount by multiplying its price by quantity
    item.addons.forEach(element => {
      amount += element.quantity * element.addon.price;
    });

    // adding softDrinks price by multiplying its price by quantity
    amount += item.softDrinks.quantity * item.softDrinks.drink.price;

    // setting total amount to state after adding all
    setTotalAmount(amount);
    Toast.success('Product Added!');
  };

  const updateCartItem = (prod_id, quantity, condition) => {
    let amount = totalAmount;
    const findProd = cartItems.find(item => item.prod_id === prod_id);
    // setting new quantity of product
    findProd.quantity = quantity;
    if (condition === '+') {
      amount += findProd.product.price;
      setTotalAmount(amount);
    } else {
      amount -= findProd.product.price;
      setTotalAmount(amount);
    }
  };

  return (
    <CartContext.Provider
      value={{cartItems, setCartItems, addToCart, totalAmount, updateCartItem}}>
      {children}
    </CartContext.Provider>
  );
}
