const initialState = 0;
const countNumbers = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return state + 1;
  } else if (action.type === "DECREMENT") {
    if (state === 0) {
      return state;
    } else return state - 1;
  } else return state;
};

export default countNumbers;
