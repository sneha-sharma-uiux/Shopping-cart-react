import * as actionTypes from "../actions/actionTypes";

const initialState = {
  cartData: [],
  totalItem: 0,
  cartShow: false,
  cartTotal: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cartData: action.payload
      };
    case actionTypes.TOTAL_CART_ITEM:
      return {
        ...state,
        totalItem: action.payload
      };
    case actionTypes.TOGGLE_CART:
      return {
        ...state,
        cartShow: action.payload
      };
    case actionTypes.CART_TOTAL:
      return {
        ...state,
        cartTotal: action.payload
      };

    default:
      return state;
  }
};
