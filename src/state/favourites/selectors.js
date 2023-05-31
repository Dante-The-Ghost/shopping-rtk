import get from "lodash/get";

export const getFavouritesData = (state) =>
  get(state, "favouritesReducer.favourites", null);
