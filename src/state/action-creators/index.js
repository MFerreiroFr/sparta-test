import { actionTypes } from '../action-types';

export const setTokenExistence = (tokenExists) => {
  return {
    type: actionTypes.SET_TOKEN_EXISTENCE,
    payload: tokenExists,
  };
};
