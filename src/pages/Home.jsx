import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const features = [
  { icon: '🌱', titulo: 'Origen único', texto: 'Seleccionamos granos de productores de Colombia, Etiopía y Brasil.' },
  { icon: '🔥', titulo: 'Tostado semanal', texto: 'Tostamos en pequeños lotes para que recibas café fresco.' },
  { icon: '🚚', titulo: 'Envíos a todo el país', texto: 'Recibí tu pedido en tu casa en 24 a 72 h hábiles.' },
]

function Home() {
  return (
    <Container>
      <section className="hero rounded-4 p-4 p-md-5 mb-5 fade-in">
        <h1 className="display-5 fw-bold">Bienvenido a Grano &amp; Taza</h1>
        <p className="lead mb-4">
          Café de especialidad, cafeteras y accesorios para preparar en casa el mejor café.
        </p>
        <Button as={Link} to="/productos" size="lg" variant="warning">
          Ver productos
        </Button>
      </section>

      <Row xs={1} md={3} className="g-4">
        {features.map((f) => (
          <Col key={f.titulo}>
            <div className="feature h-100 p-4 rounded-4 text-center">
              <div className="fs-1">{f.icon}</div>
              <h2 className="h5 mt-2">{f.titulo}</h2>
              <p className="mb-0 small">{f.texto}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Home
