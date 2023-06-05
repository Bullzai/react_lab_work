import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

const AddToMustWatchIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const onUserSelect2 = (e) => {
    e.preventDefault();
    context.addToMustWatch(movie);
    // console.log(movie);
  };
  return (
    <IconButton aria-label="add to must watch" onClick={onUserSelect2}>
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToMustWatchIcon;
