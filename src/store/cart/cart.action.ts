import {CART_ACTION_TYPES, CartItem} from "./cart.types";
import {ActionWithPayload, createAction, withMatcher} from "../../utils/reducer/reducer.utils";
import {CategoryItem} from "../categories/categories.types";


const addCartItem = (cartItems: CartItem[], productToAdd: CategoryItem): CartItem[] => {
  const existingCartItem = cartItems.find((cartItem) =>
    productToAdd.id === cartItem.id
  )

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? {...cartItem, quantity: cartItem.quantity + 1}
        : cartItem
    )
  }

  return [...cartItems, {...productToAdd, quantity: 1}]
}

const removeCartItem = (cartItems: CartItem[], cartItemToRemove: CategoryItem): CartItem[] => {
  const existingCartItem = cartItems.find((cartItem) =>
    cartItemToRemove.id === cartItem.id
  )

  if (existingCartItem?.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? {...cartItem, quantity: cartItem.quantity - 1}
      : cartItem
  )
}

const clearCartItem = (cartItems: CartItem[], cartItemToClear: CategoryItem): CartItem[] =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id)

export type SetIsCartOpen = ActionWithPayload<CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean>
export type SetCartItems = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS, CartItem[]>

export const setIsCartOpen = withMatcher((bool: boolean): SetIsCartOpen =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool))

export const setCartItems = withMatcher((cartItems: CartItem[]): SetCartItems =>
  createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems))

export const addItemToCart = (cartItems: CartItem[], productToAdd: CategoryItem) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return setCartItems(newCartItems);
}

export const removeItemFromCart = (cartItems: CartItem[], cartItemToRemove: CategoryItem) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  return setCartItems(newCartItems);
}

export const clearItemFromCart = (cartItems: CartItem[], cartItemToClear: CategoryItem) => {
  const newCartItems = clearCartItem(cartItems, cartItemToClear);
  return setCartItems(newCartItems);
}
