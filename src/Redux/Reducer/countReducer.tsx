/* eslint-disable prettier/prettier */
const initialState = {
  count: 0,
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case 'COUNT_INCRESE':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'COUNT_DECRESE':
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
}
