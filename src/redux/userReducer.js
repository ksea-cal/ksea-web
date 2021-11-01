import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  user: {},
};

// Do some async job
// export const incrementAsync = createAsyncThunk(
//     'counter/fetchCount',
//     async (amount) => {
//       const response = await fetchCount(amount);
//       // The value we return becomes the `fulfilled` action payload
//       return response.data;
//     }
// );

export const userSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setToken: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.token = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setToken, setUser } = userSlice.actions;

export const selectToken = (state) => state.user.token;
export const selectUser = (state) => state.user.user;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd = (amount) => (dispatch, getState) => {
//   const currentValue = selectCount(getState());
//   if (currentValue % 2 === 1) {
//     dispatch(incrementByAmount(amount));
//   }
// };

export default userSlice.reducer;
