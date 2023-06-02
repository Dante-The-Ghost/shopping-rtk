import { Card, CardMedia, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";

import classes from "./FavouritesListItem.module.css";
import { useCallback } from "react";

const FavouritesListItem = ({ product }) => {
  const navigate = useNavigate();
  const { id, title, thumbnail } = product;

  const handleOnCardClick = useCallback(() => {
    navigate(`/products/${id}`);
  }, [id, navigate]);

  return (
    <Card
      className={classes.container}
      sx={{ width: 100 }}
      onClick={handleOnCardClick}
    >
      <CardMedia sx={{ height: 100 }} image={thumbnail} title={title} />
      <CardContent>{title}</CardContent>
    </Card>
  );
};

export default FavouritesListItem;
