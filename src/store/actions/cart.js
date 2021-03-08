import * as actionTypes from "../actions/actionTypes";

export const addToCart = id => {
  return (dispatch, getState) => {
    const cartItem = getState().api.products.find(item => item.id === id);
    let storeCart = getState().cart.cartData;
    const index = storeCart.findIndex(i => i.item.id === cartItem.id);
    if (index !== -1) {
      storeCart[index].qty++;
    } else {
      storeCart.push({ item: cartItem, qty: 1 });
    }
    const total = storeCart.reduce((a, c) => a + c.qty, 0);

    dispatch({
      type: actionTypes.ADD_TO_CART,
      payload: storeCart
    });
    dispatch({
      type: actionTypes.TOTAL_CART_ITEM,
      payload: total
    });
    dispatch(cartTotal());
  };
};
export const removeFromCart = id => {
  return (dispatch, getState) => {
    let storeCart = getState().cart.cartData;
    const index = storeCart.findIndex(i => i.item.id === id);
    if (index !== -1) {
      storeCart[index].qty--;
    }
    const total = storeCart.reduce((a, c) => a + c.qty, 0);
    dispatch({
      type: actionTypes.ADD_TO_CART,
      payload: storeCart.filter(e => e.qty !== 0)
    });
    dispatch({
      type: actionTypes.TOTAL_CART_ITEM,
      payload: total
    });
    dispatch(cartTotal());
  };
};

export const toggleCart = () => {
  return (dispatch, getState) => {
    dispatch({
      type: actionTypes.TOGGLE_CART,
      payload: !getState().cart.cartShow
    });
  };
};
export const cartTotal = () => {
  return (dispatch, getState) => {
    let storeCart = getState().cart.cartData;
    const totalVal = storeCart.reduce((a, c) => a + c.item.price * c.qty, 0);
    dispatch({
      type: actionTypes.CART_TOTAL,
      payload: totalVal
    });
  };
};

export const checkout = id => {
  return (dispatch, getState) => {
    dispatch({
      type: actionTypes.ADD_TO_CART,
      payload: []
    });
    dispatch({
      type: actionTypes.TOTAL_CART_ITEM,
      payload: 0
    });
    dispatch({
      type: actionTypes.CART_TOTAL,
      payload: 0
    });
    dispatch(toggleCart());
  };
};
