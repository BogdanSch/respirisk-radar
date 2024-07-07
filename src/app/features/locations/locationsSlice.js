import { createSlice } from "@reduxjs/toolkit";

export const locationsSlice = createSlice({
  name: "locations",
  initialState: {
    value: [],
  },
  reducers: {
    setLocations: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setLocations } = locationsSlice.actions;
export default locationsSlice.reducer;
