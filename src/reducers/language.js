import actions from "../actions";

const initialState = "en";

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.language.SET_LANGUAGE:
      return action.payload;
    default:
      return state;
  }
};
