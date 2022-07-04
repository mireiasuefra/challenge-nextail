import "./ProductDetail.scss";

function ProductDetail(props) {



console.log('DetalleProducto', props.product.name)

  return (
    <li className="detail-product">
      <h3>detalle del producto: {props.product.name}</h3>
    </li>
  );
}

export default ProductDetail;