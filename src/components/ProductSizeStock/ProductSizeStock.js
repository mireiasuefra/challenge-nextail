import React from "react";

import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  BarSeries,
} from "@devexpress/dx-react-chart-material-ui";

function ProductSizeStock(props) {
  const sizeStock = [
    { argument: "XS", value: props.product.size_stock.XS },
    { argument: "S", value: props.product.size_stock.S },
    { argument: "M", value: props.product.size_stock.M },
    { argument: "L", value: props.product.size_stock.L },
    { argument: "XL", value: props.product.size_stock.XL },
    { argument: "XXL", value: props.product.size_stock.XXL },
  ];

  return (
    <Chart data={sizeStock} height={200}>
      <ArgumentAxis />
      <ValueAxis />

      <BarSeries valueField="value" argumentField="argument" color="#000000" />
    </Chart>
  );
}

export default ProductSizeStock;
