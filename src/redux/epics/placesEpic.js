import { ofType } from "redux-observable";
import { from, of } from "rxjs";
import { switchMap, map, catchError } from "rxjs/operators";
import {
  fetchPlaces,
  fetchPlacesSuccess,
  fetchPlacesError,
} from "../slices/placesSlice";

const fetchPlacesEpic = (action$) =>
  action$.pipe(
    ofType(fetchPlaces.type),
    switchMap((action) =>
      from(
        new Promise((resolve, reject) => {
          const service = new window.google.maps.places.AutocompleteService();
          service.getPlacePredictions(
            { input: action.payload },
            (predictions, status) => {
              if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                resolve(predictions);
              } else {
                reject(status);
              }
            }
          );
        })
      ).pipe(
        map((predictions) => fetchPlacesSuccess(predictions)),
        catchError((error) => of(fetchPlacesError(error)))
      )
    )
  );

export default fetchPlacesEpic;
