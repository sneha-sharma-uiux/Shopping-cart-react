import * as actionTypes from "../actions/actionTypes";

export const setCategories = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.GET_REQUESTED
    });
    return fetch("http://localhost:5000/categories")
      .then(response => response.json())
      .then(results =>
        dispatch({
          type: actionTypes.SET_CATEGORIES,
          payload: results
        })
      )
      .catch(err => {
        console.log("responce error");
      });
  };
};
export const setProdusts = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.GET_REQUESTED
    });
    return fetch("http://localhost:5000/products")
      .then(response => {
        return response.json();
      })
      .then(results =>
        dispatch({
          type: actionTypes.SET_PRODUCTS,
          payload: results
        })
      )
      .catch(err => {
        console.log("responce error");
      });
  };
};
