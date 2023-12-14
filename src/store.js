import { combineReducers, createStore } from "redux";
import reducer1 from "./reduxCounter/counter1Slice";
import reducer2 from "./reduxCounter/counter2Slice";
import { configureStore } from "@reduxjs/toolkit";

// const rootReducer = combineReducers({
//   counter1: reducer1,
//   counter2: reducer2,
// });

const store = configureStore({
  reducer: {
    counter1: reducer1,
    counter2: reducer2,
  },
});

export default store;
