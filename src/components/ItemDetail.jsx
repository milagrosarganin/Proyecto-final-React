import { Col, Row } from 'react-bootstrap'
import { formatPrice } from '../utils.js'

function ItemDetail({ product }) {
  return (
    <Row className="g-4 align-items-center">
      <Col md={6}>
        <img src={product.imagen} alt={product.nombre} className="img-fluid rounded-4 shadow-sm w-100" />
      </Col>
      <Col md={6}>
        <span className="small text-uppercase product-category">{product.categoria}</span>
        <h1 className="page-title">{product.nombre}</h1>
        <p>{product.descripcion}</p>
        <p className="fs-3 fw-bold">{formatPrice(product.precio)}</p>
        <p className="small text-muted">Stock disponible: {product.stock}</p>
      </Col>
    </Row>
  )
}

export default ItemDetail
