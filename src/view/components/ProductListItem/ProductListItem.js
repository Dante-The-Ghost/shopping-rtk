import { useCallback } from "react";
import { connect } from "react-redux";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  IconButton,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import classes from "./ProductListItem.module.css";

const ProductListItem = ({
  product,
  favourite,
  addToFavourites,
  removeFromFavourites,
  addToCart,
}) => {
  const { id, title, price, image } = product;

  const handleFavourite = useCallback(() => {
    if (!favourite) {
      addToFavourites(product);
    } else {
      removeFromFavourites(id);
    }
  }, [favourite, id, product, addToFavourites, removeFromFavourites]);

  return (
    <Card className={classes.container}>
      <CardMedia
        component="img"
        sx={{ width: "100px", height: "100px" }}
        image={image}
      />
      <CardHeader title={title} subheader={price} sx={{ width: "100%" }} />
      <CardActions>
        <IconButton onClick={handleFavourite}>
          {favourite ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
        </IconButton>
        <IconButton onClick={() => addToCart(product)}>
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

const mapStateToProps = (state, ownProps) => ({
  product: ownProps.product,
});

const mapDispatchToProps = {
  addToCart: (product) => (dispatch) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  },
  addToFavourites: (id) => (dispatch) => {
    dispatch({ type: "ADD_TO_FAVOURITES", payload: id });
  },
  removeFromFavourites: (productName) => (dispatch) => {
    dispatch({ type: "REMOVE_FROM_FAVOURITES", payload: productName });
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListItem);
