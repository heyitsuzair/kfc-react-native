import React, {useState} from 'react';
import SoftdrinkContext from './SoftdrinkContext';

export default function authState({children}) {
  const [softDrinkQuantity, setSoftDrinkQuantity] = useState([]);

  return (
    <SoftdrinkContext.Provider
      value={{softDrinkQuantity, setSoftDrinkQuantity}}>
      {children}
    </SoftdrinkContext.Provider>
  );
}
