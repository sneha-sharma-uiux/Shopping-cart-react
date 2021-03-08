import { setCategories as setCategoriesAction } from "../actions/api";
import { setProdusts as setProdustsAction } from "../actions/api";
import { setFilterId as setFilterIdAction } from "../actions/filterProduct";
import { addToCart as addToCartAction } from "../actions/cart";
import { removeFromCart as removeFromCartAction } from "../actions/cart";
import { toggleCart as toggleCartAction } from "../actions/cart";
import { checkout as checkoutAction } from "../actions/cart";

export const setCategories = setCategoriesAction;
export const setProdusts = setProdustsAction;
export const setFilterId = setFilterIdAction;
export const addToCart = addToCartAction;
export const removeFromCart = removeFromCartAction;
export const toggleCart = toggleCartAction;
export const checkout = checkoutAction;
