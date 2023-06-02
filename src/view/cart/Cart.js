import { connect } from "react-redux";
import { getCartData } from "../../state/cart/selectors";
import CartListItem from "../components/CartListItem/CartListItem";

const Cart = ({ cart }) => {
  const total = cart.reduce(
    (total, current) => total + current.price * current.quantity,
    0
  );

  return (
    <>
      <h2>My cart</h2>
      {cart.length === 0 && <p>There are no items in your cart!</p>}
      {cart.map((product) => (
        <CartListItem product={product} key={product.id} />
      ))}
      <h3>Your total: {Number(total).toFixed(2)}$</h3>
    </>
  );
};

const mapStateProps = (state) => ({
  cart: getCartData(state),
});

export default connect(mapStateProps)(Cart);
