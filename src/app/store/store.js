import { configureStore } from "@reduxjs/toolkit";

import locationsReducer from "../features/locations/locationsSlice";
import selectedLocationReducer from "../features/selectedLocation/selectedLocationSlice";

export default configureStore({
  reducer: {
    locations: locationsReducer,
    selectedLocation: selectedLocationReducer,
  },
});
