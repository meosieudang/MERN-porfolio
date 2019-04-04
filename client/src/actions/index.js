import * as type from "../constants/actionType";
import axios from "axios";

export const getPorfolioRequest = () => dispatch => {
  return axios
    .get("https://5c6cd094d51de300146f5c30.mockapi.io/porfolio")
    .then(res => dispatch(getPorfolio(res.data)))
    .catch(err => console.log(err));
};

export const getPorfolio = data => {
  return {
    type: type.GET_PORFOLIO,
    payload: data
  };
};

export const getItemRequest = id => dispatch => {
  return axios
    .get(`https://5c6cd094d51de300146f5c30.mockapi.io/porfolio/${id}`)
    .then(res => dispatch(getItem(res.data)))
    .catch(err => console.log(err));
};

export const getItem = id => {
  return {
    type: type.GET_ITEM,
    payload: id
  };
};

export const getData = value => {
  return {
    type: type.FILTER_PORFOLIO,
    payload: value
  };
};
