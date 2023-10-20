import { connect } from "react-redux";
import { getFavouritesData } from "../../state/favourites/selectors";
import FavouritesListItem from "../components/FavouritesListItem/FavouritesListItem";

const FavouritesPage = ({ favourites }) => {
  return (
    <>
      <h1>My favourites</h1>
      {favourites.length === 0 && <p>You have no favourite products yet!</p>}
      <div style={{ display: "flex" }}>
        {favourites.map((product) => (
          <FavouritesListItem product={product} key={product.id} />
        ))}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  favourites: getFavouritesData(state),
});

export default connect(mapStateToProps)(FavouritesPage);
