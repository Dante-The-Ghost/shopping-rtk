import get from "lodash/get";

export const getCartData = (state) => get(state, "cartReducer.cart", null);
