const initialState = {
  favourites: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_FAVOURITES":
      return !state.favourites.includes(payload)
        ? {
            favourites: [...state.favourites, payload],
          }
        : state;
    case "REMOVE_FROM_FAVOURITES":
      return {
        favourites: state.favourites.filter(
          (product) => payload !== product.id
        ),
      };
    default:
      return state;
  }
};

export default reducer;
