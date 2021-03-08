import * as actionTypes from "../actions/actionTypes";

const initialState = {
  categories: [],
  products: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
        loading: false
      };
    case actionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false
      };
    case actionTypes.GET_REQUESTED:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
