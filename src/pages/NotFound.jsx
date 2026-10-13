import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <Container className="text-center py-5">
      <h1 className="page-title">Página no encontrada</h1>
      <p>La dirección que buscás no existe.</p>
      <Button as={Link} to="/" variant="dark" className="btn-coffee">Volver al inicio</Button>
    </Container>
  )
}

export default NotFound
