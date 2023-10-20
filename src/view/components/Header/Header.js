import { connect } from "react-redux";
import { getCartData } from "../../../state/cart/selectors";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { NavLink, useNavigate } from "react-router-dom";

import classes from "./Header.module.css";

const Header = ({ cart }) => {
  const navigate = useNavigate();

  const productCount = cart.reduce(
    (total, current) => total + current.quantity,
    0
  );

  return (
    <header className={classes.header}>
      <div className={classes.navigation}>
        <NavLink to="/">
          <StorefrontIcon />
        </NavLink>
        <NavLink
          to="/products"
          end
          style={({ isActive }) => {
            return {
              textDecoration: isActive ? "underline" : "",
            };
          }}
        >
          Products
        </NavLink>
        <NavLink
          to="favourites"
          style={({ isActive }) => {
            return {
              textDecoration: isActive ? "underline" : "",
            };
          }}
        >
          Favourites
        </NavLink>
      </div>
      <IconButton className={classes.cart} onClick={() => navigate("cart")}>
        <Badge badgeContent={productCount} color="error">
          <ShoppingCartIcon sx={{ color: "white" }} />
        </Badge>
      </IconButton>
    </header>
  );
};

const mapStateToProps = (state) => ({
  cart: getCartData(state),
});

export default connect(mapStateToProps)(Header);
