import { actionTypes } from '../action-types';
const initialState = {
  token: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_TOKEN_EXISTENCE:
      return { token: action.payload };
    default:
      return state;
  }
};

export default reducer;
