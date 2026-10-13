import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { formatPrice } from '../utils.js'

function Item({ id, nombre, precio, imagen, categoria }) {
  return (
    <Card className="product-card h-100">
      <Card.Img variant="top" src={imagen} alt={nombre} />
      <Card.Body className="d-flex flex-column">
        <span className="small text-uppercase product-category">{categoria}</span>
        <Card.Title as="h5">{nombre}</Card.Title>
        <Card.Text className="fs-5 fw-bold mt-auto">{formatPrice(precio)}</Card.Text>
        <Button as={Link} to={`/producto/${id}`} variant="dark" className="btn-coffee">
          Ver detalle
        </Button>
      </Card.Body>
    </Card>
  )
}

export default Item
