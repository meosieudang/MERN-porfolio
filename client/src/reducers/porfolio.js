import {
  ADD_NEW_PROFILES_SUCCESS,
  GET_PORFOLIO,
  GET_ITEM,
  FILTER_PROJECT
} from "../actions/type";

const initialState = {
  porfolios: [],
  item: {},
  search: []
};

const porfolio = (state = initialState, action) => {
  switch (action.type) {
    case GET_PORFOLIO:
      return {
        ...state,
        porfolios: action.payload,
        search: []
      };

    case GET_ITEM:
      return {
        ...state,
        item: action.payload
      };
    case FILTER_PROJECT:
      const tempArr = [...state.porfolios];
      const tempResult = [];
      tempArr.map(item =>
        item.tech.filter(project => {
          if (project === action.payload) tempResult.push(item);
        })
      );
      return {
        ...state,
        search: tempResult
      };

    case ADD_NEW_PROFILES_SUCCESS:
      return {
        ...state,
        porfolios: [action.payload, ...state.porfolios]
      };
    default:
      return state;
  }
};

export default porfolio;
