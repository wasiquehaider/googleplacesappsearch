import { createSlice } from "@reduxjs/toolkit";

const placesSlice = createSlice({
  name: "places",
  initialState: {
    places: [],
    error: null,
  },
  reducers: {
    fetchPlaces: (state, action) => {},
    fetchPlacesSuccess: (state, action) => {
      state.places = action.payload;
      state.error = null;
    },
    fetchPlacesError: (state, action) => {
      state.places = [];
      state.error = action.payload;
    },
  },
});

export const { fetchPlaces, fetchPlacesSuccess, fetchPlacesError } =
  placesSlice.actions;
export default placesSlice.reducer;
