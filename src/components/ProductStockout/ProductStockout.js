import "./ProductStockout.scss";

import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#4DD113",
  },
}))(LinearProgress);

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

function ProductStockout(props) {
  const classes = useStyles();
  const stockout = props.product.stockout_rate * 100;

  return (
    <div className="product-stockout">
      <div className="product-stockout__group-text">
        <p className="product-stockout__percent">
          {stockout.toFixed(1)} %{" "}
        </p>
        <small className="product-stockout__text">stockout</small>
      </div>
      <div className={classes.root} >
        <BorderLinearProgress variant="determinate" value={stockout} />
      </div>
    </div>
  );
}

export default ProductStockout;
