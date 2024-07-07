import { createSlice } from "@reduxjs/toolkit";

export const selectedLocationSlice = createSlice({
  name: "selectedLocation",
  initialState: {
    value: null,
  },
  reducers: {
    setSelectedLocation: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSelectedLocation } = selectedLocationSlice.actions;
export default selectedLocationSlice.reducer;
