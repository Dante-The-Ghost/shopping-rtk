import { useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Backdrop, CircularProgress } from "@mui/material";
import { useGetProductQuery } from "../../../services/services";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import classes from "./Product.module.css";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const Product = () => {
  const { id } = useParams();
  const { data, isLoading, isFetching } = useGetProductQuery({ id });

  if (isLoading || isFetching) {
    return (
      <Backdrop open>
        <CircularProgress />
      </Backdrop>
    );
  }

  const { title, thumbnail, description, price, images } = data;

  return (
    <div className={classes.container}>
      <Grid container spacing={2}>
        <Grid item>
          <Img alt="product thumbnail" src={thumbnail} />
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="h1" component="div">
                {title}
              </Typography>
              <Typography variant="h5" gutterBottom>
                Description:
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                {description}
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="h4" component="div">
              {price}$
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <h3>Images</h3>
      <div className={classes.imageContainer}>
        {images.map((image) => (
          <img src={image} alt="" />
        ))}
      </div>
    </div>
  );
};

export default Product;
