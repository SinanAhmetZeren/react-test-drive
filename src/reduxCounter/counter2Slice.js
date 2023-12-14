import { combineReducers, createStore } from "redux";

const initialStateCountStep2 = {
  count2: 100,
  step2: 1,
};

export default function reducer2(state = initialStateCountStep2, action) {
  switch (action.type) {
    case "count2/increase":
      return { ...state, count2: state.count2 + state.step2 };
    case "count2/decrease":
      return { ...state, count2: state.count2 - state.step2 };
    case "step2/increase":
      return { ...state, step2: state.step2 + 1 };
    case "step2/decrease":
      return { ...state, step2: state.step2 - 1 };
    default:
      return state;
  }
}

// const rootReducer = combineReducers({
//   reducer1: reducer1,
//   reducer2: reducer2,
// });

export function countInc2() {
  return { type: "count2/increase" };
}
export function countDec2() {
  return { type: "count2/decrease" };
}
export function stepInc2() {
  return { type: "step2/increase" };
}
export function stepDec2() {
  return { type: "step2/decrease" };
}
