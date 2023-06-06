import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addAuth: (state, action) => {
      state.auth = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addAuth } = authSlice.actions;

export default authSlice.reducer;
