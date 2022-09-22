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
    // check condition and according to condition add or subtract amount
    if (condition === '+') {
      amount += findProd.product.price;
      setTotalAmount(amount);
    } else {
      amount -= findProd.product.price;
      setTotalAmount(amount);
    }
  };

  const deleteCartItem = prod => {
    // filter the product and set the filtered products to "cartItems"
    const filter = cartItems.filter(item => {
      return item.prod_id !== prod.prod_id;
    });
    setCartItems(filter);

    let amount = totalAmount;
    // removing product price in total amount by multiplying its price by quantity
    amount -= prod.quantity * prod.product.price;

    // removing addons price in total amount by multiplying its price by quantity
    prod.addons.forEach(element => {
      amount -= element.quantity * element.addon.price;
    });

    // removing softDrinks price by multiplying its price by quantity
    amount -= prod.softDrinks.quantity * prod.softDrinks.drink.price;

    // setting total amount to state
    setTotalAmount(amount);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        totalAmount,
        updateCartItem,
        deleteCartItem,
      }}>
      {children}
    </CartContext.Provider>
  );
}
