import * as actionTypes from "../actions/actionTypes";

export const setFilterId = id => {
  return (dispatch, getState) => {
    const filterID = getState().filter.filterID === id ? "" : id;
    dispatch({
      type: actionTypes.SET_PRODUCT_FILTER,
      payload: filterID
    });
  };
};
