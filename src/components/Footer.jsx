import { Col, Container, Row } from 'react-bootstrap'
import TeamCard from './TeamCard.jsx'

const team = [
  { nombre: 'Lucía Fernández', rol: 'Fundadora y barista', email: 'lucia@granoytaza.com', inicial: 'LF' },
  { nombre: 'Martín Gómez', rol: 'Tostador', email: 'martin@granoytaza.com', inicial: 'MG' },
  { nombre: 'Sofía Ramírez', rol: 'Atención al cliente', email: 'sofia@granoytaza.com', inicial: 'SR' },
]

function Footer() {
  return (
    <footer className="site-footer pt-5 pb-3">
      <Container>
        <Row className="g-4">
          <Col lg={4}>
            <h5 className="footer-title">Grano &amp; Taza</h5>
            <p className="small mb-1">Tienda online de café de especialidad, cafeteras y accesorios.</p>
            <p className="small mb-1">📍 Av. Corrientes 1234, CABA, Argentina</p>
            <p className="small mb-1">📞 +54 11 4567-8901</p>
            <p className="small mb-1">✉️ hola@granoytaza.com</p>
            <p className="small mb-0">🕘 Lunes a sábado de 9 a 19 h</p>
          </Col>
          <Col lg={8}>
            <h5 className="footer-title">Nuestro equipo</h5>
            <Row className="g-3">
              {team.map((persona) => (
                <Col sm={4} key={persona.email}>
                  <TeamCard {...persona} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
        <hr className="my-4" />
        <p className="text-center small mb-0">
          © {new Date().getFullYear()} Grano &amp; Taza. Todos los derechos reservados.
        </p>
      </Container>
    </footer>
  )
}

export default Footer
