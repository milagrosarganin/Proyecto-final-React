import { useState } from 'react'
import { Alert, Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import { formatPrice } from '../utils.js'
import ItemCount from './ItemCount.jsx'

function ItemDetail({ product }) {
  const { addToCart } = useCart()
  const [added, setAdded] = useState(false)

  const handleAdd = (quantity) => {
    addToCart(product, quantity)
    setAdded(true)
  }

  return (
    <Row className="g-4 align-items-center fade-in">
      <Col md={6}>
        <img src={product.imagen} alt={product.nombre} className="img-fluid rounded-4 shadow-sm w-100" />
      </Col>
      <Col md={6}>
        <span className="small text-uppercase product-category">{product.categoria}</span>
        <h1 className="page-title">{product.nombre}</h1>
        <p>{product.descripcion}</p>
        <p className="fs-3 fw-bold">{formatPrice(product.precio)}</p>
        <p className="small text-muted">Stock disponible: {product.stock}</p>

        {added ? (
          <>
            <Alert variant="success">Producto agregado al carrito.</Alert>
            <div className="d-flex gap-2 flex-wrap">
              <Button as={Link} to="/carrito" className="btn-coffee" variant="dark">Ir al carrito</Button>
              <Button as={Link} to="/productos" variant="outline-dark">Seguir comprando</Button>
            </div>
          </>
        ) : (
          <ItemCount stock={product.stock} onAdd={handleAdd} />
        )}
      </Col>
    </Row>
  )
}

export default ItemDetail
