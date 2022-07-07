import "./ProductDetail.scss";
import ProductStockout from "../ProductStockout/ProductStockout";
import ProductSizeStock from "../ProductSizeStock/ProductSizeStock";

function ProductDetail(props) {
  const isGoodCoverage = props.product.wh_coverage > 0.5;

  const onClick = () => {
    if (window.confirm("Do you really want to complete?")) {
      props.onComplete(props.product.code);
    }
  };

  return (
    <li className="product-detail" onClick={onClick}>
      <p className="product-detail__ranking">{props.product.sales_ranking}</p>
      <button className="product-detail__button">Mark Complete</button>
      <img
        className="product-detail__image"
        src={`images/${props.product.code}.jpg`}
        alt={props.product.name}
      ></img>

      <small className="product-detail__code">{props.product.code}</small>
      <h2 className="product-detail__name">{props.product.name}</h2>
      <div>
        <p className="product-detail__price">{props.product.price} €</p>
      </div>
      <ProductSizeStock product={props.product} />
      <ProductStockout product={props.product} />
      <div className="product-detail__coverage">
        {isGoodCoverage ? (
          <p className="product-detail__coverage--good">Good</p>
        ) : (
          <p className="product-detail__coverage--low">Very Low</p>
        )}
        <p className="product-detail__coverage-text">wh coverage</p>
      </div>
    </li>
  );
}

export default ProductDetail;
