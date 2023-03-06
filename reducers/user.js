import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    token: null,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addTokenToStore: (state, action) => {
      state.value.token = action.payload;
    },
    removeTokenToStore: (state, action) => {
      state.value.token = null;
    },
  },
});

export const { addTokenToStore, removeTokenToStore } = userSlice.actions;
export default userSlice.reducer;
