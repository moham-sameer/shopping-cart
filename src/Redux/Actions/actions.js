import * as types from './action-types'
export const ADD = (item) => {
  return {
    type: types.ADD_TO_CART,
    payload: item,
  };
};
export const DLT = (id) => {
  return {
    type: types.REMOVE_FROM_CART,
    payload: id,
  };
};
export const REMOVE = (items) => {
  return {
    type: types.RMV_ONE,
    payload: items,
  };
};

