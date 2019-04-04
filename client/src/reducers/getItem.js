import * as type from "../constants/actionType";

const initialState = {};

const getItem = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_ITEM:
      // console.log(action);
      return { ...action.payload };
    default:
      return state;
  }
};
export default getItem;
