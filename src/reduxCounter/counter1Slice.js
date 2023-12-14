import { createSlice } from "@reduxjs/toolkit";

//  ---  REDUX TOOLKIT  ---//
const initialState = {
  count1: 0,
  step1: 1,
};

/* ------------- ASYNC FUNCTION CREATED -------------------------

export const fetchAddress = createAsyncThunk(
  'user/fetchAddress',
  async function () {
    // 1) We get the user's geolocation position
    const positionObj = await getPosition();
    const position = {
      latitude: positionObj.coords.latitude,
      longitude: positionObj.coords.longitude,
    };

    // 2) Then we use a reverse geocoding API to get a description of the user's address, 
    // so we can display it the order form, so that the user can correct it if wrong
    const addressObj = await getAddress(position);
    const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

    // 3) Then we return an object with the data that we are interested in.
    // Payload of the FULFILLED state
    return { position, address };
  }
);
*/

const counter1Slice = createSlice({
  name: "counter1",
  initialState,
  reducers: {
    countInc1(state) {
      state.count1 = state.count1 + state.step1;
    },
    countDec1(state) {
      state.count1 = state.count1 - state.step1;
    },
    stepInc1(state) {
      state.step1 += 1;
    },
    stepDec1(state) {
      state.step1 -= 1;
    },
  },
  /* ------------- THUNK IS ADDED AS AN EXTRA REDUCER -------------------------

  extraReducers: (builder) =>
    builder.addCase(fetchAddress.pending, (state, action) => {
      state.status = "loading";
    }),
    */
});

/* ------------- USED IN COMPONENT WITH A DISPATCH -------------------------
onClick={(e) => {
  e.preventDefault();
  dispatch(fetchAddress());
}}
>
*/

export const { countDec1, countInc1, stepInc1, stepDec1 } =
  counter1Slice.actions;
export default counter1Slice.reducer;

// --- ----------- ---//
// --- ----------- ---//
// --- ----------- ---//
// --- ----------- ---//
// --- OLD VERSION ---//
// --- ----------- ---//
// --- ----------- ---//
// --- ----------- ---//

/*
const initialStateCountStep1 = {
  count1: 0,
  step1: 1,
};

//export default function reducer1(state = initialStateCountStep1, action) {
export function reducer1(state = initialStateCountStep1, action) {
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
export function countInc1() {
  return { type: "count1/increase" };
}
export function countDec1() {
  return { type: "count1/decrease" };
}
export function stepInc1() {
  return { type: "step1/increase" };
}
export function stepDec1() {
  return { type: "step1/decrease" };
}
*/
