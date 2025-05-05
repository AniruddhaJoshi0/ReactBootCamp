import React, { createContext, useReducer, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

const ProductContext = createContext();

const initialState = [
  { id: '1', name: 'Laptop', description: 'Gaming laptop', price: 1200 },
  { id: '2', name: 'Phone', description: 'Smartphone', price: 800 },
];

function productReducer(state, action) {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return [...state, { ...action.payload, id: uuidv4() }];
    case 'UPDATE_PRODUCT':
      return state.map((p) => (p.id === action.payload.id ? action.payload : p));
    case 'DELETE_PRODUCT':
      return state.filter((p) => p.id !== action.payload);
    default:
      return state;
  }
}

export function ProductProvider({ children }) {
  const [products, dispatch] = useReducer(productReducer, initialState);

  return (
    <ProductContext.Provider value={{ products, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
}

export const useProducts = () => useContext(ProductContext);