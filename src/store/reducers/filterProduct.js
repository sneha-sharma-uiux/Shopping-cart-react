import * as actionTypes from "../actions/actionTypes";

const initialState = {
  filterID: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PRODUCT_FILTER:
      return {
        ...state,
        filterID: action.payload
      };

    default:
      return state;
  }
};
