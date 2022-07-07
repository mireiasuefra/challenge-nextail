import "./ProductStockout.scss";

import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#4DD113" : "#4DD113",
  },
}));

function ProductStockout(props) {
  const stockout = props.product.stockout_rate * 100;

  return (
    <div className="product-stockout">
      <div className="product-stockout__group-text">
        <p className="product-stockout__percent">{stockout.toFixed(1)} % </p>
        <small className="product-stockout__text">stockout</small>
      </div>
      <Box sx={{ flexGrow: 1 }}>
        <BorderLinearProgress variant="determinate" value={stockout} />
      </Box>
    </div>
  );
}

export default ProductStockout;
