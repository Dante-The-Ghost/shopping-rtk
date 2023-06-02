import { useParams } from "react-router-dom";
import { useGetProductQuery } from "../../../services/services";
import { Backdrop, CircularProgress } from "@mui/material";

import classes from "./Product.module.css";

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

  const { title, thumbnail, description, price, images } = data;

  return (
    <>
      <div className={classes.container}>
        <>
          <img
            src={thumbnail}
            alt="product thumbnail"
            width={200}
            height={200}
          />
        </>
        <div className={classes.text}>
          <h1>{title}</h1>
          <h3>Description:</h3>
          <p>{description}</p>
        </div>
        <div className={classes.price}>
          <h2>{price}$</h2>
        </div>
      </div>
      <div className={classes.images}>
        <h2>Images</h2>
        {images.map((image) => (
          <img src={image} alt="" key={Math.random()} />
        ))}
      </div>
    </>
  );
};

export default Product;
