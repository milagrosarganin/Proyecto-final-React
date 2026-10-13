import { Button, Container, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import { formatPrice } from '../utils.js'

function Cart() {
  const { cart, removeFromCart, clearCart, totalQuantity, totalPrice } = useCart()

  if (cart.length === 0) {
    return (
      <Container className="text-center py-5 fade-in">
        <h1 className="page-title">Tu carrito está vacío</h1>
        <p>Todavía no agregaste productos.</p>
        <Button as={Link} to="/productos" variant="dark" className="btn-coffee">
          Ver productos
        </Button>
      </Container>
    )
  }

  return (
    <Container className="fade-in">
      <h1 className="page-title mb-4">Carrito</h1>
      <Table responsive className="align-middle cart-table">
        <thead>
          <tr>
            <th>Producto</th>
            <th className="text-end">Precio</th>
            <th className="text-center">Cantidad</th>
            <th className="text-end">Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>
                <div className="d-flex align-items-center gap-3">
                  <img src={item.imagen} alt={item.nombre} className="cart-thumb rounded" />
                  <Link to={`/producto/${item.id}`} className="text-reset">{item.nombre}</Link>
                </div>
              </td>
              <td className="text-end">{formatPrice(item.precio)}</td>
              <td className="text-center">{item.quantity}</td>
              <td className="text-end">{formatPrice(item.precio * item.quantity)}</td>
              <td className="text-end">
                <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item.id)}>
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
        <Button variant="outline-secondary" onClick={clearCart}>Vaciar carrito</Button>
        <div className="text-md-end">
          <p className="mb-1">Productos: {totalQuantity}</p>
          <p className="fs-4 fw-bold mb-0">Total: {formatPrice(totalPrice)}</p>
        </div>
      </div>
    </Container>
  )
}

export default Cart
