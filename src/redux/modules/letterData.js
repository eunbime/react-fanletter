const ADD_LETTER = "letterList/ADD_LETTER";
const EDIT_LETTER = "letterList/EDIT_LETTER";
const jsonData = require("../../letterData.json");

const initialState = {
  letterList: [...jsonData],
};

export const addLetter = (payload) => {
  return { type: ADD_LETTER, payload };
};

const letterData = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LETTER:
      return {
        ...state,
        letterList: [action.payload, ...state.letterList],
      };
    case EDIT_LETTER:
      return {
        letterList: action.payload,
      };
    default:
      return state;
  }
};

export default letterData;
