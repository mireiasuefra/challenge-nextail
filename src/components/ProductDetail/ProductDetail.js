import "./ProductDetail.scss";

function ProductDetail(props) {
  const stockout = props.product.stockout_rate * 100;
  const isGoodCoverage = props.product.wh_coverage > 0.5;

  return (
    <li className="product-detail">

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
        <p className="product-detail__price"> {props.product.price} €</p>
      </div>
      {/* <div>GRAFICA</div>*/}
      <div className="product-detail__stockout">
        <p className="product-detail__stockout-percent">
          {stockout.toFixed(1)} %{" "}
        </p>
        <small className="product-detail__stockout-text">stockout</small>
      </div>
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
