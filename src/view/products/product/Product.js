import { useParams } from "react-router-dom";
import { useGetProductQuery } from "../../../services/services";
import { Backdrop, CircularProgress } from "@mui/material";

const Product = () => {
  const { id } = useParams();
  const { data, isLoading, isFetching } = useGetProductQuery(id);

  if (isLoading || isFetching) {
    return (
      <Backdrop open>
        <CircularProgress />
      </Backdrop>
    );
  }

  const { title } = data;

  return <>{title}</>;
};

export default Product;
