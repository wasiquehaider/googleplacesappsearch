import React from "react";
import { useSelector } from "react-redux";
import { List, ListItem, ListItemText } from "@mui/material";

const SearchResults = ({ onPlaceClick }) => {
  const places = useSelector((state) => state.places.places);

  const handlePlaceClick = (place) => {
    onPlaceClick(place);
  };

  return (
    <List>
      {places.map((place, index) => (
        <ListItem key={index} onClick={() => handlePlaceClick(place)}>
          <ListItemText primary={place.description} />
        </ListItem>
      ))}
    </List>
  );
};

export default SearchResults;
