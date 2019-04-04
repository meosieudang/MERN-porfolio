import * as type from "../constants/actionType";

const initialState = {
  porfolios: [],
  search: []
};

const porfolio = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_PORFOLIO:
      return {
        ...state,
        porfolios: action.payload,
        search: []
      };
    case type.FILTER_PORFOLIO:
      const tempArr = [...state.porfolios];
      const tempResult = [];
      tempArr.map(item =>
        item.technical.filter(i => {
          if (i === action.payload) tempResult.push(item);
        })
      );
      return {
        ...state,
        search: tempResult
      };
    default:
      return state;
  }
};

export default porfolio;
