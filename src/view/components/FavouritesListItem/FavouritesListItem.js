import { Card, CardMedia, CardContent } from "@mui/material";

import classes from "./FavouritesListItem.module.css";

const FavouritesListItem = ({ product }) => {
  const { title, image } = product;
  return (
    <Card className={classes.container} sx={{ width: 100 }}>
      <CardMedia sx={{ height: 100 }} image={image} title={title} />
      <CardContent>{title}</CardContent>
    </Card>
  );
};

export default FavouritesListItem;
