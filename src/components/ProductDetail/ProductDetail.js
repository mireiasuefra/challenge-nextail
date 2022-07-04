import "./ProductDetail.scss";

function ProductDetail(props) {

  return (
    <li className="product-detail">
       <img
          className="product-detail__image"
          src={`images/${props.product.code}.jpg`}
          alt={props.product.name}
        ></img>
      <h2 className="product-detail__name">{props.product.name}</h2>
      <p className="product-detail__price"> {props.product.price} €</p>
    </li>
  );
}

export default ProductDetail;