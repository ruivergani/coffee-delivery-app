/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext } from "react";
import { CartContext } from "../contexts/CartProvider";

// Hook created to avoid importing useContext and CartContext in every file
export function useCart() {
  const context = useContext(CartContext);
  return context;
}