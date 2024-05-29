import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { TextField } from "@mui/material";
import { fetchPlaces } from "../redux/slices/placesSlice";

const AutocompleteInput = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (input.length > 2) {
      dispatch(fetchPlaces(input));
    }
  }, [input, dispatch]);

  return (
    <TextField
      value={input}
      onChange={(e) => setInput(e.target.value)}
      label="Search for places"
      variant="outlined"
      fullWidth
    />
  );
};

export default AutocompleteInput;
