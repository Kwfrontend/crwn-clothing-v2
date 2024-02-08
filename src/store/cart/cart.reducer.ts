import {CartItem}from "./cart.types.ts";
import { AnyAction } from "redux";
import { setCartItems, setIsCartOpen } from "./cart.action.ts";

export type CartState= {
    readonly isCartOpen : Boolean;
    readonly cartItems: CartItem[];
}

export const CART_INITIAL_STATE: CartState = {
    isCartOpen : false,
    cartItems:[],
}

export const cartReducer = (state = CART_INITIAL_STATE, action: AnyAction): CartState => {

if (setIsCartOpen.match(action)){
    return {
        ...state ,
        isCartOpen : action.payload,
    };
}

if (setCartItems.match(action)){
    return {
        ...state,
        cartItems: action.payload
    };
}

    return state;
        
 }
