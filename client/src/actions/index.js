import * as type from "../constants/actionType";
import axios from "axios";

export const getPorfolio = data => {
  return {
    type: type.GET_PORFOLIO,
    payload: data
  };
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
