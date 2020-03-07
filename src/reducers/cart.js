import actionType from '../actions/actionType';

const initState = [
  {
    id: 1,
    title: 'Apple',
    price: 8888,
    num: 10
  },
  {
    id: 2,
    title: 'Orange',
    price: 6666,
    num: 10
  }
];

export default (state = initState, action) => {
  switch (action.type) {
    case actionType.CART_NUM_INCREMENT:
    console.log('加', '<-->');
     return state.map(item => {
       if (item.id  === action.payload.id) {
         item.num += 1
       }
       return item;
     })
     case actionType.CART_NUM_DECREMENT:
     console.log('减', '<-->');
     return state.map(item => {
       if (item.id  === action.payload.id) {
         item.num -= 1
       }
       return item;
     })
    default:
      return state;
  }
};
