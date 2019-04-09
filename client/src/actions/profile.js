import axios from "axios";
import {
  ADD_NEW_PROFILES_SUCCESS,
  GET_ERROR,
  GET_PORFOLIO,
  GET_ITEM,
  FILTER_PROJECT
} from "./type";

//create new profile
export const addNewProfile = data => dispatch => {
  axios
    .post("/api/profiles", data)
    .then(res =>
      dispatch({ type: ADD_NEW_PROFILES_SUCCESS, payload: res.data })
    )
    .catch(err => dispatch({ type: GET_ERROR, payload: err.response.date }));
};

//get all projects
export const getPorfolioRequest = () => dispatch => {
  axios
    .get("/api/profiles/")
    .then(res => dispatch({ type: GET_PORFOLIO, payload: res.data }))
    .catch(err => console.log(err));
};

//get 1 project
export const getItemRequest = id => dispatch => {
  return axios
    .get(`/api/profiles/${id}`)
    .then(res => dispatch({ type: GET_ITEM, payload: res.data }))
    .catch(err => console.log(err));
};

//filter project
export const filterProject = query => ({
  type: FILTER_PROJECT,
  payload: query
});
