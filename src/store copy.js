import { combineReducers, createStore } from "redux";

const initialStateCountStep1 = {
  count1: 0,
  step1: 1,
};

const initialStateCountStep2 = {
  count2: 100,
  step2: 1,
};

function reducer1(state = initialStateCountStep1, action) {
  switch (action.type) {
    case "count1/increase":
      return { ...state, count1: state.count1 + state.step1 };
    case "count1/decrease":
      return { ...state, count1: state.count1 - state.step1 };
    case "step1/increase":
      return { ...state, step1: state.step1 + 1 };
    case "step1/decrease":
      return { ...state, step1: state.step1 - 1 };
    default:
      return state;
  }
}

function reducer2(state = initialStateCountStep2, action) {
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

const rootReducer = combineReducers({
  reducer1: reducer1,
  reducer2: reducer2,
});
const store = createStore(rootReducer);

// console.log("hello from store.js");
// store.dispatch({ type: "count/increase" });
// console.log(store.getState());

function countInc1() {
  return { type: "count1/increase" };
}
function countDec1() {
  return { type: "count1/decrease" };
}
function stepInc1() {
  return { type: "step1/increase" };
}
function stepDec1() {
  return { type: "step1/decrease" };
}
function countInc2() {
  return { type: "count2/increase" };
}
function countDec2() {
  return { type: "count2/decrease" };
}
function stepInc2() {
  return { type: "step2/increase" };
}
function stepDec2() {
  return { type: "step2/decrease" };
}

console.log(store.getState());
store.dispatch(stepInc1());
store.dispatch(stepInc1());
store.dispatch(stepInc2());
store.dispatch(stepInc2());
store.dispatch(stepInc2());

console.log(store.getState());
store.dispatch(countInc1());
store.dispatch(countInc1());
store.dispatch(countDec2());
store.dispatch(countDec2());

console.log(store.getState());
