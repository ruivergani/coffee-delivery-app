/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useState, ReactNode, useEffect } from "react";
import { Coffee } from "../components/Card";
import { produce } from 'immer'; // library to avoid immutability state tree

// Type for TypeScript
export interface CartItem extends Coffee{
  quantity: number;
}
export interface CartContextType {
  cartItems: CartItem[];
  cartQuantity: number;
  addCoffeeToCart: (Coffee: CartItem) => void;
  changeCartItemQuantity: (cartItemId: number, type: "increase" | "decrease") => void;
  removeItemCart: (cartItemId: number) => void;
  cleanCart: () => void;
}
export interface CartContextProviderProps {
  children: ReactNode; // This allows any component wrapped in CartContextProvider to be able to access the provided context.
}

// Shopping Cart Context
export const CartContext = createContext({} as CartContextType);

// Create the Provider
export function CartContextProvider({ children } : CartContextProviderProps) {
  // CartItems
  const [cartItems, setCartItems] = useState<CartItem[]>(() => { // useState => accepts a function that is only called once during initial render
    // Get data from localStorage if exists => ensuring the shopping cart data is preserved across page refreshes or browser sessions
    const storedStateAsJSON = localStorage.getItem(
      '@coffee-delivery:cart-state-1.0.0',
    )
    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON) // return the string back into a JavaScript object (cartItems)
    }
    return [];
  });

  const cartQuantity = cartItems.length;

  // Add Items to CartContext
  function addCoffeeToCart(coffee: CartItem) {
    const coffeeAlreadyExistsInCart = cartItems.findIndex((item) => item.id === coffee.id); // return -1 when not found

    const newCart = produce(cartItems, (draft) => { // produce a new state based on previous state while maintaining immutable updates
      if (coffeeAlreadyExistsInCart < 0) { // if does not exist
        draft.push(coffee); // add coffee to array
      }
      else { // if exist
        draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity; // update existing item quantity
      }
    })
    setCartItems(newCart); // create new cart

    // This function is responsible for adding items to the shopping cart context (cartItems), either by adding a new item if it doesn't exist or updating the quantity if the item already exists in the cart. It ensures immutability by using a function like produce and then updates the state accordingly using setCartItems.
  }
  // Change Cart Quantity
  function changeCartItemQuantity(cartItemId: number, type: 'increase' | 'decrease') {
    const newCart = produce(cartItems, (draft) => {
      // Search if coffee exists in cart
      const coffeeExistsInCart = cartItems.findIndex((item) => item.id === cartItemId);
      // If exists
      if (coffeeExistsInCart >= 0) {
        const item = draft[coffeeExistsInCart]; // actual item
        draft[coffeeExistsInCart].quantity = type === 'increase' ? item.quantity + 1 : item.quantity - 1;
      }
    })
    setCartItems(newCart);
  }
  // Remove Item from Cart
  function removeItemCart(cartItemId: number) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex((item) => item.id === cartItemId); // return -1 when not found
      if (coffeeExistsInCart >= 0) {
        draft.splice(coffeeExistsInCart, 1); // remove 1 element at index coffeeExistsInCart
      }
    });
    setCartItems(newCart);
  }

  function cleanCart() {
    setCartItems([]);
  }

  // useEffect => sempre que [cartItems] mudar => salva no localStorage o array
  useEffect(() => {
    if (cartItems) { // avoid null or undefined
      const stateJSON = JSON.stringify(cartItems) // converts the cartItems array into a JSON string (LocalStorage only stores strings)
      localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON) // Stores the cartItems in the browser's localStorage
    }
  }, [cartItems]);

  // Check console.log
  console.log(cartItems);

  return (
    <CartContext.Provider value={{cartItems, addCoffeeToCart, cartQuantity, changeCartItemQuantity, removeItemCart, cleanCart}}>
      {children}
    </CartContext.Provider>
  )
}