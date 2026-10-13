import { Col, Row } from 'react-bootstrap'
import Item from './Item.jsx'

function ItemList({ products }) {
  return (
    <Row xs={1} sm={2} lg={3} className="g-4">
      {products.map((product) => (
        <Col key={product.id}>
          <Item {...product} />
        </Col>
      ))}
    </Row>
  )
}

export default ItemList
