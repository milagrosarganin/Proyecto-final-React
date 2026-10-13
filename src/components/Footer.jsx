import { Col, Container, Row } from 'react-bootstrap'

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
