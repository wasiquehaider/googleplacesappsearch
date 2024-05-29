import React, { useState } from "react";
import { Provider } from "react-redux";
import { Container, Typography } from "@mui/material";
import store from "./redux/store";
import AutocompleteInput from "./components/AutocompleteInput";
import SearchResults from "./components/SearchResults";
import Map from "./components/Map";

const App = () => {
  const [mapCenter, setMapCenter] = useState({ lat: -34.397, lng: 150.644 });

  const handlePlaceClick = (place) => {
    console.log("Clicked place:", place);
    if (place.place_id) {
      const service = new window.google.maps.places.PlacesService(
        document.createElement("div")
      );
      service.getDetails({ placeId: place.place_id }, (result, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          setMapCenter({
            lat: result.geometry.location.lat(),
            lng: result.geometry.location.lng(),
          });
        } else {
          console.error("Failed to fetch place details:", status);
        }
      });
    } else {
      console.error("Invalid place object:", place);
    }
  };

  return (
    <Provider store={store}>
      <Container>
        <Typography variant="h4" component="h1" gutterBottom>
          Google Places Autocomplete
        </Typography>
        <AutocompleteInput />
        <SearchResults onPlaceClick={handlePlaceClick} />
        <Map center={mapCenter} />
      </Container>
    </Provider>
  );
};

export default App;
