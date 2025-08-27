import {useContext} from "react";
import CartContext from "./pages/CartContext";

export const useCart = () => useContext(CartContext);