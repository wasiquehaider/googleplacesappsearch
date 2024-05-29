import { configureStore } from "@reduxjs/toolkit";
import { createEpicMiddleware } from "redux-observable";
import placesReducer from "./slices/placesSlice";
import fetchPlacesEpic from "./epics/placesEpic";

const epicMiddleware = createEpicMiddleware();

const store = configureStore({
  reducer: {
    places: placesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(epicMiddleware),
});

epicMiddleware.run(fetchPlacesEpic);

export default store;
