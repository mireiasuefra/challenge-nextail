import "./ProductsList.scss";

import { useEffect, useState } from "react";
import getProducts from "./../../services/get-products";
import ProductDetail from "./../ProductDetail/ProductDetail";

function ProductsList() {
  const [products, setProducts] = useState([]);

  const markComplete = (code) => {
    const newProductList = products.filter((product) => {
      return product.code !== code;
    });
    setProducts(newProductList);
  };

  const renderProducts = () => {
    return products
      .sort((a, b) => (a.sales_ranking > b.sales_ranking ? 1 : -1))
      .map((oneProduct) => {
        return (
          <ProductDetail
            key={oneProduct.code}
            product={oneProduct}
            onComplete={markComplete}
          />
        );
      });
  };

  useEffect(() => {
    getProducts().then((response) => {
      setProducts(response);
    });
  }, []);

  return (
    <section className="product-list">
      <ul className="product-list__list">{renderProducts()}</ul>
    </section>
  );
}

export default ProductsList;
