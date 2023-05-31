const initialState = {
  cart: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
      const index = state.cart.findIndex((item) => item.id === payload.id);

      return index !== -1
        ? {
            cart: state.cart.map((item) =>
              item.id === payload.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : { cart: [...state.cart, { ...payload, quantity: 1 }] };
    case "REMOVE_FROM_CART":
      return {
        cart: state.cart
          .map((item) =>
            item.id === payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity !== 0),
      };
    default:
      return state;
  }
};

export default reducer;
