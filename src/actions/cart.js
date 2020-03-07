import actionType from './actionType';

export const increment = id => {
  console.log(id, '<-id->');
  return {
    type: actionType.CART_NUM_INCREMENT,
    payload: {
      id,
    },
  };
};
export const decrement = id => {
  return {
    type: actionType.CART_NUM_DECREMENT,
    payload: {
      id,
    },
  };
};
