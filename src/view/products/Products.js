import { Backdrop, CircularProgress } from "@mui/material";
import { useGetProductsQuery } from "../../services/services";
import { getFavouritesData } from "../../state/favourites/selectors";
import ProductListItem from "../components/ProductListItem/ProductListItem";
import { connect } from "react-redux";

const Products = ({ favourites }) => {
  const { data, isLoading, isFetching } = useGetProductsQuery();

  if (isLoading || isFetching) {
    return (
      <Backdrop open>
        <CircularProgress />
      </Backdrop>
    );
  }

  return (
    <>
      <h2>Products</h2>
      {data?.products.map((product) => (
        <ProductListItem
          product={product}
          favourite={favourites.includes(product)}
          key={product.id}
        />
      ))}
    </>
  );
};

const mapStateToProps = (state) => ({
  favourites: getFavouritesData(state),
});

export default connect(mapStateToProps)(Products);
