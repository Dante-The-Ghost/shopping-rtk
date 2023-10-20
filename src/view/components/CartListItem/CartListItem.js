import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
} from "@mui/material";
import { connect } from "react-redux";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";

import classes from "./CartListItem.module.css";

const CartListItem = ({ product, addToCart, removeFromCart }) => {
  const { id, title, price, thumbnail, quantity } = product;

  return (
    <Card className={classes.container}>
      <CardMedia
        component="img"
        sx={{ width: "100px", height: "100px" }}
        image={thumbnail}
      />
      <CardHeader title={title} subheader={price} sx={{ width: "100%" }} />
      <CardActions>
        <IconButton
          onClick={() => {
            addToCart(product);
          }}
        >
          <AddRoundedIcon />
        </IconButton>
      </CardActions>
      <CardContent>×{quantity}</CardContent>
      <CardActions>
        <IconButton
          onClick={() => {
            removeFromCart(id);
          }}
        >
          <RemoveRoundedIcon />
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
  removeFromCart: (id) => (dispatch) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(CartListItem);
